import Layout from '@/components/Layout'
import Model from '@/components/Model'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Toaster} from 'react-hot-toast';
import {SessionProvider} from 'next-auth/react';
import EditModal from '@/components/modals/EditModals'
export default function App({ Component, pageProps }: AppProps) {
  return <SessionProvider session={pageProps.session}>
  <Toaster />
  <LoginModal/>
  <RegisterModal/>
  <EditModal/>
  {/* <Model isOpen title='Test-Model' actionLabel='Submit'/> */}
  <Layout>


    <Component {...pageProps} />

  </Layout>
  </SessionProvider>
}
