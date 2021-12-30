import Stories from "./Stories"
import Input from './Input'
import Post from "./Post"
import Posts from "./Posts"

function Feed() {
    return (
        <div className='mx-auto p-1 md:p-2 bg-gray-100 w-4/5'>
            {/* Stories */}
            <Stories />

            {/* InoutBox */}
            <Input />

            {/* Post */}

            
            <Posts  />


        </div>
    )
}

export default Feed
