import { useSelector } from "react-redux";
import GoToLinkButton from "../General_reusable_components/Go_to_link_button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTable } from "@fortawesome/free-solid-svg-icons";
import { AppState } from "../../typescript/types";


function HomePage():JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <div className={`homePage ${themeName}`}>
            <nav className="homePageNavigation">
                <GoToLinkButton path="/tables" >
                    <FontAwesomeIcon className="fontAwesomeIcon" icon={faTable} />
                    <br />
                    <b>My Tables</b>
                </GoToLinkButton>
                
                <GoToLinkButton path="/user" >
                    <FontAwesomeIcon className="fontAwesomeIcon" icon={faUser} />
                    <br />
                    <b>User Profile</b>
                </GoToLinkButton>
            </nav>
        </div>
    );
}

export default HomePage;