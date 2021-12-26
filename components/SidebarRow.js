import Image from 'next/image'



function SidebarRow({ src, Icon, title }) {
    return (
        <div className='flex items-center justify-start hover:bg-gray-200 rounded-xl cursor-pointer'>
            {src && (
                <Image
                    className='rounded-full'
                    src={src}
                    width={30}
                    height={30}
                    layout='fixed'
                />
            )}

            {Icon && <Icon className='h-6 w-8 inline text-blue-500 md:h-8' />}
            <p className='hidden sm:inline-flex font-md text-sm m-2'>{title}</p>


        </div>
    )
}

export default SidebarRow
