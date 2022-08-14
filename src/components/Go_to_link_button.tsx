import { NavLink } from "react-router-dom";

function GoToLinkButton({ text, path } : { text: string, path: string }):JSX.Element{
    return(
        <NavLink to={path}><button>{text}</button></NavLink>
    );
}

export default GoToLinkButton;