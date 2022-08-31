import { useSelector } from "react-redux";

function Message():JSX.Element | null{
    const [message, themeName] = useSelector((state:any) => [state.message, state.theme.name]);

    //if(!message.messageText){
    //    return null;
    //}

    return(
        <div className={`messageWindow ${message.messageText ? "visible" : "hidden"} ${themeName} `}>
            <b className="messageText">{message.messageText}</b>
        </div>
    );
}

export default Message;