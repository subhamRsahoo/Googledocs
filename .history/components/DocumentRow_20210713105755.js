import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter } from "next/dist/client/router"
import {useCollectionOnce,} from "react-firebase-hooks/firestore"

function DocumentRow({ id , fileName , date}) {
    const [snapshot] = useCollectionOnce(db.collection("userDocs").doc(session.user.email).collection("docs").orderBy("timestamp" , "desc"));

    return (
        <div>
            <Icon name="article" size="3xl" color="blue" />
            <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm ">{date?.toDate().toLocaleDateString()}</p>
        </div>
    )
}

export default DocumentRow;
