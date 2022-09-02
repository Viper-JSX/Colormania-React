import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import UserClass from "../../classes/User";
import { AppState, UserProfileProps } from "../../typescript/types";
import GoToLinkButton from "../General_reusable_components/Go_to_link_button";
import UserData from "./User_data";

function UserProfile({ handleLogout } : UserProfileProps):JSX.Element{
    const user: UserClass = useSelector((state: AppState) => state.user.user);
    const themeName = useSelector((state: AppState) => state.theme.themeName);
    
    return(
        <div className={`userProfile ${themeName}`}>
            <UserData />
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