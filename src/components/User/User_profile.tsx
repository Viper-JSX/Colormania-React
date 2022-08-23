import { Outlet } from "react-router";

function UserProfile():JSX.Element{
    return(
        <div className="userProfile">
            User Proile
            <Outlet />
        </div>
    );
}

export default UserProfile;