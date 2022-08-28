import { useSelector } from "react-redux";
import GoToLinkButton from "../Go_to_link_button";


function HomePage():JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

    return(
        <div className={`homePage ${themeName}`}>
            Home page
            <GoToLinkButton text="User account" path="/user" />
            <GoToLinkButton text="My tables" path="/tables" />
        </div>
    );
}

export default HomePage;