import Image from 'next/image'



function SidebarRow({ src, Icon, title }) {
    return (
        <div className='flex items-center hover:bg-gray-200 rounded-xl cursor-pointer'>
            {src && (
                <Image
                    className='rounded-full'
                    src={src}
                    width={30}
                    height={30}
                    layout='fixed'
                />
            )}

            {Icon && <Icon className='h-8 w-8 inline text-blue-500' />}
            <p className='hidden sm:inline-flex font-medium m-2'>{title}</p>


        </div>
    )
}

export default SidebarRow
