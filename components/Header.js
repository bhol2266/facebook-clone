import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { getSession, useSession } from 'next-auth/react'

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid'

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'
import Home from '../pages'


function Header() {

    const { data: session } = useSession()

    return (
        <div className='grid grid-cols-3  pt-2 pb-2 pl-2 pr-2 md:pt-0 md:pb-0  sticky top-0 z-50 bg-white  shadow-md'>
            {/* Left */}

            <div className='flex items-center'>
                <Image src='https://links.papareact.com/5me' width={40} height={40} layout='fixed' />

                <div className='hidden md:inline-flex  ml-2 items-center rounded-full p-2 bg-gray-100'>
                    <SearchIcon className="h-5 w-5 text-gray-600" />
                    <input className='ml-2 items-center bg-transparent outline-none text-sm font-light' type='text' placeholder='Search Facebook' />
                </div>
            </div>





            {/* Center */}

            <div className='flex items-center justify-center '>
                <div className='flex'>
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right */}

            <div className='flex items-center sm:space-x-2 ml-auto'>
                {/* Profile pic */}

                <Image
                    className='rounded-full cursor-pointer'
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout='fixed'
                />


                <p className='m-2 font-semibold pr-3 whitespace-nowrap hidden md:inline-flex '>{session.user.name}</p>
               
                <ViewGridIcon className='icon'/>
                <ChatIcon className='icon'/>
                <BellIcon className='icon'/>
                <ChevronDownIcon className='icon'/>
            
              

            </div>
        </div>
    )
}

export default Header
