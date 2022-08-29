import { NavLink } from "react-router-dom";

function GoToLinkButton({ path, children } : { path: string, children?: React.ReactNode }):JSX.Element{
    return(
        <NavLink className={`goToLinkButtonLink`} to={path}><button className={`goToLinkButton`}>{children}</button></NavLink>
    );
}

export default GoToLinkButton;