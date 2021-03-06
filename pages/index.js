import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Script from 'next/script'


export default function Home() {

  const { data: session, status } = useSession()

  if (!session) {
    return <Login />
  }
  return (
    <div>
      <Head>
        <title>Facebook 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       

      </Head>

      <Header />

      <main className='flex sm:flex-row flex-col'>
        {/*Sidebar  */}
        <Sidebar />
        {/* Feed */}
        <Feed />
      </main>

      {/* Widgets */}
    </div>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
  
    }
  }
}
