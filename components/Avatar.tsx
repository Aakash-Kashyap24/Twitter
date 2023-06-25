

interface AvatarProps{
    userIds:string,
    isLarge?:boolean 
    hasBorder?:boolean
}

import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react'

const Avatar:React.FC<AvatarProps> = ({
    userIds,
    isLarge,
    hasBorder
}) => {

  const router=useRouter();
    const {data:fetchUser}=useUser(userIds);
const onClick=useCallback((event:any)=>{
  event.stopPropagation();

  const url= `/user/${userIds}`

  router.push(url);
},[router,userIds])

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
overflow-hidden
`}
    >

<img onClick={onClick} src={fetchUser?.user?.profileImage|| '/images/placeholder.png'} alt="avatar" style={{objectFit:'cover',borderRadius:"100%"}} />

    </div>
  );
}

export default Avatar
