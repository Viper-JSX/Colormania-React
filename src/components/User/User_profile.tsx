import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import UserClass from "../../classes/User";
import { UserProfileProps } from "../../typescript/types";
import GoToLinkButton from "../General_reusable_components/Go_to_link_button";

function UserProfile({ handleLogout } : UserProfileProps):JSX.Element{
    const user: UserClass = useSelector((state:any) => state.user.user);
    const themeName = useSelector((state: any) => state.theme.themeName);
    
    return(
        <div className={`userProfile ${themeName}`}>
            { user.nickname } User Proile
            
            {
                user.authorized ? 
                <button className="logoutButton" onClick={handleLogout}>Logout</button>
                :
                <GoToLinkButton path="authorization/login">Login</GoToLinkButton>            }
            <Outlet />
        </div>
    );
}

export default UserProfile;