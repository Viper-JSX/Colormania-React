import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

function AuthorizationNavigation():JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);
    
    return(
        <nav className={`authorizationNavigation ${themeName}`}>
            <ul>
                <li><NavLink className={`navigationLink`} to="login" >Login</NavLink></li>
                <li><NavLink className={`navigationLink`} to="register" >Register</NavLink></li>
            </ul>
        </nav>
    );
}

export default AuthorizationNavigation;