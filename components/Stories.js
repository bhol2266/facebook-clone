import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Sonny Sangha",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Elon Musk",
        src: "https://hotdesipics.co/wp-content/uploads/2021/12/Sex-Bomb-Jaise-Dhikne-Wali-Indian-Model-Ke-Nude-Photos-.jpg",
        profile: "https://hotdesipics.co/wp-content/uploads/2021/12/Mast-Big-Boobs-Wali-Desi-Teacher-Ke-Nude-Photos-_004.jpg"
    },
    {
        name: "Jeff Bezos",
        src: "https://hotdesipics.co/wp-content/uploads/2021/12/Big-Boobs-aur-Moti-Gaand-Wali-Desi-Delhi-Girl-Nude-_003.jpg",
        profile: "https://hotdesipics.co/wp-content/uploads/2021/12/Big-Boobs-aur-Moti-Gaand-Wali-Desi-Delhi-Girl-Nude-_003.jpg"
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/zvy",
        profile: "https://links.papareact.com/4u4"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },

]

function Stories() {
    return (

        <div className="flex justify-center widthForFeed md:w-4/5 space-x-2 sm:space-x-8 mt-2 md:space-x-2 ">
        {stories.map(story => {
            return(
            <StoryCard key={story.profile} name={story.name} profile={story.profile} src={story.src} />)
        })}


    </div>
    )
}

export default Stories