import { useSelector } from "react-redux";

function Message():JSX.Element{
    const message = useSelector((state:any) => state.message);

    return(
        <div className="messageWindow">
            <b>{message.messageText}</b>
        </div>
    );
}

export default Message;