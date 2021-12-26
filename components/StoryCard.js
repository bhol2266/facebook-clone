import Image from 'next/image'

function StoryCard({ name, profile, src }) {
    return (
        <div className='relative w-10 h-40 md:w-28  overflow-hidden'>
            <Image
                className='absolute z-50 rounded-full'
                src={profile}
                width={35}
                height={35}
                objectFit='cover'
            />

            <Image
                className='object-cover brightness-75 rounded-2xl invisible md:visible'
                src={src}
                layout='fill'
            />

            <p className='text-white z-50 absolute bottom-1 left-2  whitespace-nowrap text-xs '>{name}</p>
        </div>
    )
}

export default StoryCard
