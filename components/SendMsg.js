import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMsg({endOfMessageRef}) {

    const {user, Moralis} = useMoralis();

    const [message, setMessage] = useState("");

    const sendMessage = (e) =>{
        e.preventDefault();

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress"),
        }).then(
            (message)=>{
                alert('Message sent!!');
            },
            (error)=>{
                alert('Error Occured while sending..');
            }
        );

        endOfMessageRef.current.scrollIntoView({behaviour: "smooth"});

        setMessage("");
       
    }

    return (
        <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12
        px-6 py-4 max-w-2xl shadow-xl rounded-full border-blue-400">

            <input className="flex-grow outline-none bg-transparent text-white
            placeholder-gray-500 pr-5" 
            type="text" 
            placeholder="Enter Message Here.."
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            />
            
            <button className="text-bold text-pink-500"
            onClick={sendMessage}>Send</button>
        </form>
    )
}

export default SendMsg
