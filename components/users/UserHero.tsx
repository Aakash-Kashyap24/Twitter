import useUser from '@/hooks/useUser'
import Image from 'next/image'
import React from 'react'
import Avatar from '../Avatar'
import { ClipLoader } from 'react-spinners'

interface UserHeroProps{
    userIds:string
}

const UserHero:React.FC<UserHeroProps>= ({userIds}) => {

    const {data:userDetails,isLoading}=useUser(userIds)


  return (
    <div className='bg-neutral-700 h-44 relative'>
      
      {
        userDetails?.user?.coverImage &&(
            <Image 
            src={userDetails?.user?.coverImage}
            fill
            alt='cover-image'
            style={{objectFit:'cover'}}
            />
        )
      }

      <div className="absolute -bottom-16 left-4">
        <Avatar  userIds={userIds} isLarge hasBorder />
      </div>

    </div>
  )
}

export default UserHero
