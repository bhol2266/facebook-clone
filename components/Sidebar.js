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
        <div className='flex sm:flex-col justify-between p-2  w-full sm:w-fit self-start sm:sticky top-16'>
            <SidebarRow src={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UserIcon} title='friends' />
            <SidebarRow Icon={UserGroupIcon} title='Groups' />
            <SidebarRow Icon={ShoppingBagIcon} title='Market' />
            <SidebarRow Icon={DesktopComputerIcon} title='Watch' />
            <SidebarRow Icon={CalendarIcon} title='Events' />
            <SidebarRow Icon={ClockIcon} title='Memories' />
            <SidebarRow Icon={ChevronDownIcon} title='See More' />
        </div>
    )
}

export default Sidebar
