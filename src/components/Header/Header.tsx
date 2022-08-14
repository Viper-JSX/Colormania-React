import AppTitle from "./App_title";

type HeaderProps = {
    handleColorModeChange?: () => void;
};


function Header({ handleColorModeChange } : HeaderProps):JSX.Element{
    return(
        <header>
            <AppTitle titleText="Color Picker by Yura Shtefanko" />
        </header>
    );
}

export default Header;
