import { useSelector } from "react-redux";

function Message():JSX.Element | null{
    const message = useSelector((state:any) => state.message);

    if(!message.messageText){
        return null;
    }

    return(
        <div className="messageWindow">
            <b>{message.messageText}</b>
        </div>
    );
}

export default Message;