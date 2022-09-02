import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { AppState } from "../../typescript/types";
import AuthorizationNavigation from "./Authorization_navigation";

function AuthorizationForm():JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <div className={`authorizationFormWrapper ${themeName}`}>
            <div className={`authorizationForm ${themeName}`}>
                <AuthorizationNavigation />
                <Outlet />
            </div>
        </div>
    );
}

export default AuthorizationForm;