import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import {ClipLoader} from 'react-spinners';


const UserView=()=>{


    const router=useRouter();
  const { userIds } = router.query;


  
    const {data:fetchedUser,isLoading,error}=useUser(userIds as string);

    console.log('data',fetchedUser)

    if (isLoading||!fetchedUser&&!error) {
        return (

            <div className="flex justify-center items-center h-full">
                <ClipLoader color="lightblue" size={80}  />
            </div>
        )
    }

    return(
        <>
        <Header label={fetchedUser?.user?.name} showBackArrow/>
        <UserHero userIds={userIds as string}/>
        <UserBio userId={userIds as string} />
        <PostFeed userId={userIds as string} />
        </>
    )
}


export default UserView;