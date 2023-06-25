import { BsTwitter } from "react-icons/bs";

import useNotifications from "@/hooks/useNotifications";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect } from "react";
import NotificationsItem from "./NotificationsItem";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const NotificationsFeed = () => {
const router=useRouter();
    const session=getSession();
    if (!session) {
        router.push('/')
    }

  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No notifications
      </div>
    );
  }
console.log(fetchedNotifications)
  return (
    <div className="flex flex-col">
      {fetchedNotifications?.notifications?.map(
        (
          notification: Record<string, any> // Removed extra ">" character after "notification"
        ) => (
          <NotificationsItem
            notification={notification}
            key={notification.id}
          />
        )
      )}
    </div>
  );
};

export default NotificationsFeed;
