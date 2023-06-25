import React from 'react'
import { BsTwitter } from 'react-icons/bs';

interface NotificationsProps{
    notification:Record <string,any>,}

const NotificationsItem:React.FC<NotificationsProps> = ({notification}) => {
  return (
    <div
      className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800"
    >
      <BsTwitter color="white" size={32} />
      <p className="text-white">{notification.body}</p>
    </div>
  );
}

export default NotificationsItem
