import Image from "next/image";
import { useMoralis } from "react-moralis"

function Avatar({username,logoutOnPress}) {

    const {user,logout} = useMoralis();

    return (
        <>
          <Image src={`https://avatars.dicebear.com/api/pixel-art/
          ${username || user.get('username')}.svg`}
          onClick={() => logoutOnPress && logout()}
          layout="fill"
          className="rounded-full bg-black cursor-pointer hover:opacity-10"/>  
        </>
    )
}

export default Avatar
