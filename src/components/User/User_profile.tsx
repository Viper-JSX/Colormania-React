import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import UserClass from "../../classes/User";

function UserProfile():JSX.Element{
    const user: UserClass = useSelector((state:any) => state.user.user);
    console.log(user)

    return(
        <div className="userProfile">
            { user.nickname } User Proile
            <Outlet />
        </div>
    );
}

export default UserProfile;