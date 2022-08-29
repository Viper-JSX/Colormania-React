import { NavLink } from "react-router-dom";

function GoToLinkButton({ path, children } : { path: string, children?: React.ReactNode }):JSX.Element{
    return(
        <NavLink to={path}><button>{children}</button></NavLink>
    );
}

export default GoToLinkButton;