import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter} from "next/dist/client/router";
import db from "../../components/Login"
import { useDocumentOnce} from "react-firebase-hooks/firestore"
import { getSession , signOut , useSession} from "next-auth/client"
import Login from "../../components/Login";

function Doc() {
    return (
        <div>
            <h1>Text Editor</h1>
        </div>
    )
}

export default Doc
