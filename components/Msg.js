import { useRef, useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis"
import SendMsg from "./SendMsg";
import Message from "./Message";

const MINS_DURATION = 100000000;
const i=0;

function Msg() {

    const {user} = useMoralis();

    const endOfMessageRef = useRef(null);

    const [info, setInfo] = useState([]);


    const {data, isLoading, error} = useMoralisQuery(
        'Messages',
        (query) => query
        .ascending('createdAt')
        .greaterThan(
            'createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
        [],
        {
            live:true,
        }
    );
   

    return (
        <div className="pb-56">

            <div className=" mt-5 space-y-10 p-4">
                
                {data.map((message)=>(
                    <>
                     <Message key={message.id} message={message}/>
                    </>
                ))}  

            </div>
            
            <div className="flex justify-center z-10">
                <SendMsg endOfMessageRef={endOfMessageRef}/>
            </div>
            <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
                <p>You're up to date {user.getUsername()}!</p>
            </div>
        </div>
    )
}

export default Msg
