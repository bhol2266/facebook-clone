import Image from 'next/image'

function StoryCard({ name, profile, src }) {
    return (
        <div className='relative h-fit md:h-44 md:w-28  overflow-hidden hover:scale-105 transition duration-150 transform'>
            <div className='md:p-1'>
                <Image
                    className='absolute z-40 rounded-full'
                    src={profile}
                    width={40}
                    height={40}
                    objectFit='cover'
                    priority={true}
                />
            </div>
            <Image
                className='object-cover brightness-75 rounded-2xl invisible md:visible '
                src={src}
                layout='fill'
                priority={true}

            />

            <p className='text-white z-50 absolute bottom-1 left-2  whitespace-nowrap text-xs invisible md:visible '>{name}</p>
        </div>
    )
}

export default StoryCard
