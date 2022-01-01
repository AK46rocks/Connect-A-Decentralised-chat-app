import Image from "next/image"
import { useMoralis } from "react-moralis"

function Login() {

    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative ">
            <h1>Login</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center
            justify-center space-y-4">
                {/* logo */}
              <Image className="object-cover rounded-full" src="/img/Friends.jpg" height={200} width={200}/>

                {/* login button */}
                <button onClick={authenticate} className="bg-yellow-500 p-5 rounded-lg font-bold animate-pulse">Login</button>
            </div>

            <div className="w-full h-screen">
                <Image src="/img/homepage.jpg" layout="fill" 
                  objectFit="cover" 
                />
            </div>
        </div>
    )
}

export default Login
