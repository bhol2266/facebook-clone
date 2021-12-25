import { getSession, useSession } from 'next-auth/react'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserGroupIcon,
    UserIcon
} from '@heroicons/react/solid'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIconer,
} from '@heroicons/react/outline'

import SidebarRow from './SidebarRow'


function Sidebar() {
    const { data: session } = useSession()

    return (
        <div className='bg-red-500 sm:bg-green-500 md:bg-yellow-500 large:bg-blue-500 p-2 mt-5 '>
            <SidebarRow src={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UserIcon} title='friends' />
            <SidebarRow Icon={UserGroupIcon} title='Groups' />
            <SidebarRow Icon={ShoppingBagIcon} title='Market Place' />
            <SidebarRow Icon={DesktopComputerIcon} title='Watch' />
            <SidebarRow Icon={CalendarIcon} title='Events' />
            <SidebarRow Icon={ClockIcon} title='Memories' />
            <SidebarRow Icon={ChevronDownIcon} title='See More' />
        </div>
    )
}

export default Sidebar
