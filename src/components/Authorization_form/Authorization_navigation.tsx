import { NavLink } from "react-router-dom";

function AuthorizationNavigation():JSX.Element{
    return(
        <nav>
            <ul>
                <li><NavLink to="login" >Login</NavLink></li>
                <li><NavLink to="register" >Register</NavLink></li>
            </ul>
        </nav>
    );
}

export default AuthorizationNavigation;