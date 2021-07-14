import Button from "@material-tailwind/react/Button"
import { signIn } from "next-auth/client"

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <img
            src="http://links.papareact.com/1ui"
            height="300"
            width="550"
            objectFit="contain"
            />

            <Button
            className="w-44 mt-10"
            color="blue"
            buttonType="filled"
            ripple="light"
            onClick={signIn}
            >
              Login
            </Button>
        </div>
    )
}

export default Login
