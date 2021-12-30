import Image from "next/image";
import {
    ChatAltIcon,
    ShareIcon,
    ThumbUpIcon
} from '@heroicons/react/outline'

function Post({ name, message, email, image, created }) {
    //Convert Seconds to Time Format
    const converter = () => {
        var date = new Date(0);
        date.setSeconds(created); // specify value for SECONDS here
        var timeString = date.toISOString().substr(11, 8);
        console.log(timeString)
        return timeString
    }
    return (
        <div className="flex flex-col pt-2  bg-white  rounded-2xl mt-4 shadow-md ">
            <div className="flex ">
                <img className="rounded-full ml-2" src={image} alt="Load" width={40} fheight={40} />
                <div>
                    <p className="pl-2">{name}</p>
                    <p className="text-gray-400 text-xs pl-2">{converter()}</p>
                </div>
            </div>
            <p className="pt-2 font-bold ml-2">{message}</p>

            {image &&
                <div className="relative h-48 md:h-56 lg:h-72 mt-1">
                    <Image
                        src={image}
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
            }
            <div className="grid grid-cols-3 ">
                <div className=" postIcon hover:rounded-bl-2xl  ">
                    <ThumbUpIcon className="h-4  " />
                    <p className="text-xs p-1">Like</p>
                </div>
                <div className=" postIcon">
                    <ChatAltIcon className="h-4" />
                    <p className="text-xs p-1">Comment</p>
                </div>
                <div className="postIcon hover:rounded-br-2xl ">
                    <ShareIcon className="h-4" />
                    <p className="text-xs p-1">Share</p>
                </div>

            </div>

        </div>
    )
}

export default Post
