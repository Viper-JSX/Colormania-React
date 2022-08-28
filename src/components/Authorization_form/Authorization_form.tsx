import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { AuthorizationFormProps } from "../../typescript/types";
import AuthorizationNavigation from "./Authorization_navigation";

function AuthorizationForm():JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

    return(
        <div className={`authorizationForm ${themeName}`}>
            <AuthorizationNavigation />
            <Outlet />
        </div>
    );
}

export default AuthorizationForm;