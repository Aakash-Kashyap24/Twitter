import Header from "@/components/Header";
import NotificationsFeed from "@/components/notifications/NotificationsFeed";

import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Notifications = () => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null; // or display loading/spinner component
  }

  return (
    <>
     <Head>
        <title>Notifications</title>
      </Head>
      <Header showBackArrow label="Notifications" />
      <NotificationsFeed />
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Notifications;
