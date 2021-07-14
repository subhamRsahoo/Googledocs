import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter } from "next/dist/client/router"
import {useCollectionOnce,} from "react-firebase-hooks/firestore"
import db from '../firebase'
import {getSession , useSession} from "next-auth/client"
import { useState } from 'react'
import firebase from 'firebase';

function DocumentRow({ id , fileName , date}) {
    const [session] = useSession();
    const [snapshot] = useCollectionOnce(db.collection("userDocs").doc(session.user.email).collection("docs").orderBy("timestamp" , "desc"));
    const [input , setInput] = useState("");
        db.collection("userDocs")
        .doc(session.user.email)
        .collection("docs")
        .add({
          fileName: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    return (
        <>
        
      {snapshot?.docs.map((a) => (
        <DocumentRow
        key={a.id}
        id={a.id}
        fileName={a.data().fileName}
        date={a.data().timestamp}
        />
      ))}

 <div>
            <Icon name="article" size="3xl" color="blue" />
            <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm ">{date?.toDate().toLocaleDateString()}</p>
        </div> 
        </>

    )
}

export default DocumentRow;
