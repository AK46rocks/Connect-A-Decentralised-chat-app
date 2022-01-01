import Image from "next/image";
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header(props) {

    const {user} = useMoralis();

    return (
        <div className="sticky top-0 pd-5 z-50 bg-black shadow-sm
          border-b-2 border-white
         text-white lg:text-center">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end
            lg:items-center">
                <div className="relative h-24 w-24 mx-auto
                hidden lg:inline-grid">
              <Image src="/img/Friends.jpg" layout="fill"
              objectFit="cover" className="rounded-full"/>
               </div>    

             <div className="col-span-4 text-left lg:text-center">
                <div className="relative h-40 w-40 
                lg:mx-auto border-white border-8 rounded-full mt-4">
                 <Avatar logoutOnPress/>
                </div>
                
                <h1 className="text-gray-500">Click on Avatar to Log-Out</h1>

                 <h2 className="text-5xl font-bold pb-5">{user.getUsername()}</h2>

                 <ChangeUserName/>
             </div>

            </div>       
        </div>
    )
}

export default Header

