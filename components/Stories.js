import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Sonny Sangha",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
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

    <div className="flex justify-items-center space-x-2 mt-2">
        {stories.map(story => {
            return(
            <StoryCard key={story.src} name={story.name} profile={story.profile} src={story.src} />)
        })}


    </div>
    )
}

export default Stories