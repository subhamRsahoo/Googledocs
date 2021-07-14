import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter} from "next/dist/client/router";
import db from "../../components/Login"
import { useDocumentOnce} from "react-firebase-hooks/firestore"
import { getSession , signOut , useSession} from "next-auth/client"
import Login from "../../components/Login";

function Doc() {
    const [session] = useSession();
    if(!session) return <Login/>

    const router = useRouter();

    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span className="cursor-pointer" onClick={() => router.push('/')}>
                <Icon name="description" size="5xl" color="blue" />
                </span>

            </header>
        </div>
    )
}

export default Doc
