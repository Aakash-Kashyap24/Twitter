import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

import useUser from "@/hooks/useUser";

interface AvatarProps {
  userIds: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userIds, isLarge, hasBorder }) => {
  const router = useRouter();

  const { data: fetchedUser } = useUser(userIds);

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/user/${userIds}`;

      router.push(url);
    },
    [router, userIds]
  );

  return (
    <div
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-12"}
        ${isLarge ? "w-32" : "w-12"}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.user?.profileImage || "/images/placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
