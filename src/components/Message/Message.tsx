import { useSelector } from "react-redux";
import { AppState } from "../../typescript/types";

function Message():JSX.Element | null{
    const themeName = useSelector((state: AppState) => state.theme.themeName);
    const message = useSelector((state: AppState) => state.message);

    return(
        <div className={`messageWindow ${message.messageText ? "visible" : "hidden"} ${themeName} `}>
            <b className="messageText">{message.messageText}</b>
        </div>
    );
}

export default Message;