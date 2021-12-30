import Post from "./Post"
import { db, storage } from '../firebase'

import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

const Posts = () => {
    const [value, loading, error] = useCollection(
        collection(db, 'posts'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    return (
        <div className='widthForFeed '>
            {value && value.docs.map((doc) => (
                <Post
                 key={doc.id}
                 name={doc.data().name}
                 message={doc.data().message}
                 email={doc.data().email}
                 image={doc.data().image}
                 created={doc.data().created}
                //  postImage={doc.data().postImage}
                 >
                </Post>
            ))}
        </div>
    );
};
export default Posts