import { useMoralis } from "react-moralis"

function ChangeUserName() {

   const {setUserData, isUserUpdating, userError, user} = useMoralis();
   
   const setUsername = () =>{
       const username = prompt(`Enter your username:(current:${user.getUsername()})`);

       if(!username)return;

       setUserData({
           username,
       })
   }
    return (
        <div className="text-sm absolute top-5 right-10">
            <button className="hover:text-pink-700"
            onClick={setUsername}>Change Username</button>
        </div>
    )
}

export default ChangeUserName
