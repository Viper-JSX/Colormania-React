import GoToLinkButton from "../Go_to_link_button";

function HomePage():JSX.Element{
    return(
        <div className="homePage">
            Home page
            <GoToLinkButton text="User account" path="/user" />
            <GoToLinkButton text="My tables" path="/tables" />
        </div>
    );
}

export default HomePage;