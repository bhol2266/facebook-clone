import { getSession, useSession } from 'next-auth/react'
import { useRef, useState } from 'react'
import Image from 'next/image'
import {
    VideoCameraIcon,
    CameraIcon,
    EmojiHappyIcon
} from '@heroicons/react/solid'
import { db, storage } from '../firebase'
import { collection, addDoc, doc, setDoc, Timestamp, getDocs } from 'firebase/firestore'
import { ref, uploadString, getDownloadURL } from "firebase/storage";




function Input() {
    const { data: session } = useSession()

    //Refrence
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const submitBtnRef = useRef(null);

    const postCollectionRef = collection(db, 'posts')

    //useState
    const [imageToPost, setimageToPost] = useState('')
    const [submitBtnVisibility, setsubmitBtnVisibility] = useState('hidden')

    const inputOnChangeHandler = async (e) => {
        if (e.target.value.length != 0 || imageToPost) {
            console.log('working');
            setsubmitBtnVisibility('inline')
        }
        else {
            setsubmitBtnVisibility('hidden')

        }

    }

    const sendPost = async (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;

        try {
            await addDoc(postCollectionRef, {
                message: inputRef.current.value,
                name: session.user.name,
                email: session.user.email,
                image: session.user.image,
                created: Timestamp.now()

            }).then(documant => {
                if (imageToPost) {
                    const storageRef = ref(storage, `posts/${documant.id},`);
                    removeImage('');

                    uploadString(storageRef, imageToPost, 'data_url').then((snapshot) => {

                        // On Sucess
                        getDownloadURL(ref(storage, `posts/${documant.id},`))
                            .then(async (url) => {
                                const ref = doc(db, 'posts', documant.id);
                                await setDoc(ref, { image: url }, { merge: true });
                            })
                    });
                }
            })

            inputRef.current.value = '';
            setsubmitBtnVisibility('hidden')

        } catch (err) {
            alert('catch:' + err)
        }



    }

    const addImagetoPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
            setsubmitBtnVisibility('inline')

        }

        reader.onload = async (readerEvent) => {
            setimageToPost(readerEvent.target.result)
        }

    }
    const removeImage = () => {
        setimageToPost(null);
        if (!inputRef.current.value) {
            setsubmitBtnVisibility('hidden')
        }
    }


    return (
        <div className='flex flex-col items-center widthForFeed  bg-white p-2 rounded-2xl shadow-md text-gray-500  mt-2 text-xs md:mt-6'>
            <div className='flex items-center   w-full  '>
                <Image
                    className='rounded-full'
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <form className='flex w-full'>
                    <input ref={inputRef} onChange={inputOnChangeHandler} className='ml-1 sm:ml-2   rounded-full md:h-12 h-8 sm:10 bg-gray-100 flex-grow px-2 sm:px-6  focus:outline-none' type="text" placeholder={`Whats on your mind, ${session.user.name}`} />
                    <img className='hidden' src="" alt="Loading..." />
                    {imageToPost && (
                        <div onClick={removeImage} className='flex flex-col items-center  filter hover:brightness-110 transition duration-150 hover:scale-105 cursor-pointer'>
                            <img className='h-10 rounded-md object-contain' src={imageToPost} alt="Loading..." />
                            <p className='text-xs text-blue-400'>Remove</p>
                        </div>
                    )}
                </form>
            </div>
            <div className='flex items-center justify-around md:justify-items-start w-full'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-5 sm:h-7 text-red-500' />
                    <p className='text-xs sm:text-sm md:text-base'>Live Video</p>
                </div>
                <div className='inputIcon' onClick={() => { filePickerRef.current.click() }}>
                    <CameraIcon className='h-5 sm:h-7 text-green-400' />
                    <p className='text-xs sm:text-sm md:text-base'>Photo/Video</p>
                    <form action="">
                        <input hidden onChange={addImagetoPost} type="file" ref={filePickerRef} />
                    </form>
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-5 sm:h-7 text-yellow-300' />
                    <p className='text-xs sm:text-sm md:text-base'>Feeling/Activity</p>
                </div>
            </div>

            <div ref={submitBtnRef} className={`w-full flex justify-center ${submitBtnVisibility}`}>
                <button className='w-3/5 bg-blue-500 text-white rounded-md hover:scale-105   p-1 px-2 md:p-2 ' onClick={sendPost}>Submit</button>
            </div>
        </div>
    )
}

export default Input
