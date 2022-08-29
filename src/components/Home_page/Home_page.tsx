import { useSelector } from "react-redux";
import GoToLinkButton from "../General_reusable_components/Go_to_link_button";


function HomePage():JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

    return(
        <div className={`homePage ${themeName}`}>
            Home page
            <GoToLinkButton path="/user" >User Profile</GoToLinkButton>
            <GoToLinkButton path="/tables" >My Tables</GoToLinkButton>
        </div>
    );
}

export default HomePage;