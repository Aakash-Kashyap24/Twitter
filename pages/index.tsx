import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Form from '@/components/Form'
import PostFeed from '@/components/posts/PostFeed'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitter ',
  description: 'This is Twitter clone ',
}

export default function Home() {
  return (
    <>
      <Header label="Home"  />
      <Form placeholder="What's Happening? " />
      <PostFeed/>
    </>
  );
}
