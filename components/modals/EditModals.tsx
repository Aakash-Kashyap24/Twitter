import { signIn } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import Input from "../Input";
import Modal from "../Model";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
import ImageUpload from "../ImageUpload";

const EditModal = () => {

    const {data:currentUser}=useCurrentUser();
    const {mutate:mutateFetchedUser}=useUser(currentUser?.user?.id)
    
    const editModal = useEditModal();

  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
console.log('Name',currentUser)
useEffect(() => {
  setProfileImage(currentUser?.profileImage);
  setCoverImage(currentUser?.coverImage);
  setName(currentUser?.name);
  setUserName(currentUser?.username);
  setBio(currentUser?.bio);
  setEmail(currentUser?.email);
}, [currentUser?.name,
    currentUser?.email,
    currentUser?.username,
    currentUser?.coverImage,
    currentUser?.profileImage,
    currentUser?.bio]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.patch("/api/edit", {
        name,
        email,
        bio,
        profileImage,
        coverImage,
        username,
      });
      mutateFetchedUser();

      toast.success("Updated At");

      editModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [
    email,
    bio,
    name,
    username,
    mutateFetchedUser,
    profileImage,
    coverImage,
    editModal,
  ]);

  const onToggle = useCallback(() => {
    editModal.onClose();
   
  }, [editModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload value={profileImage} disabled ={isLoading} onChange={(image) =>setProfileImage(image)} label="Upload Profile Image" />
      <ImageUpload value={coverImage} disabled ={isLoading} onChange={(image) =>setCoverImage(image)} label="Upload Cover Image" />

      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        disabled={isLoading}
      />{" "}
      <Input
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={username}
        type="text"
        disabled={isLoading}
      />{" "}
      <Input
        placeholder="Bio"
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        type="text"
        disabled={isLoading}
      />{" "}
     
    
    </div>
  );

//   const footerContent = (
//     <div className="text-neutral-400 text-center mt-4">
//       <p>
//         First time using Twitter?
//         <span
//           onClick={onToggle}
//           className="
//             text-white 
//             cursor-pointer 
//             hover:underline
//           "
//         >
//           {" "}
//           Create an account
//         </span>
//       </p>
//     </div>
//   );

  return (
    <Modal
      disabled={isLoading}
      isOpen={editModal.isOpen}
      title="Edit Your Profile"
      actionLabel="Edit"
      onClose={editModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    //   footer={footerContent}
    />
  );
};

export default EditModal;
