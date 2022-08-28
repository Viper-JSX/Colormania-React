import { useSelector } from "react-redux";

function Footer():JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

    return(
        <footer id="footer" className={`${themeName}`}>
            footer
        </footer>
    );
}

export default Footer;