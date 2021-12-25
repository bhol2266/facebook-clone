import Image from 'next/image'

function HeaderIcon({ Icon,active }) {
    return (
        <div className='group flex items-center cursor-pointer p-3 md:px-5 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500'>
            <Icon className={`h-5 text-gray-500 group-hover:text-blue-500 text-center sm:h-7 mx-auto ${active && 'text-blue-500'}`} />
        </div>
    )
}

export default HeaderIcon
