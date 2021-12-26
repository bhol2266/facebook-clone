import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import Router from 'next/router'


function Login() {


    const handleclickGithub = () => {
        signIn('github')
    }
    const handleclickfacebook = () => {
        signIn('facebook')
    }
    const SignInGoogle = () => {
        Router.push('/api/auth/signin')
    }
    return (
        <div className='grid place-items-center'>


            {/* <Image
                src='https://links.papareact.com/t4i'
                height={400}
                width={400}
                objectFit='contain'
            /> */}

            <h1 onClick={handleclickfacebook} className='w-1/2 p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>

            <h1 onClick={handleclickGithub} className='w-1/2 bg-github m-4 p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Github</h1>

            <h1 onClick={SignInGoogle} className='w-1/2  m-4 p-5 bg-red-500 rounded-full text-white text-center cursor-pointer'>Login with Google</h1>
        </div>
    )
}

export default Login
