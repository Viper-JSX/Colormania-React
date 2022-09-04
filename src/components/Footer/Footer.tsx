import { useSelector } from "react-redux";
import { AppState } from "../../typescript/types";
import TextWithTitle from "../General_reusable_components/Text_with_title";
import AppLogoAndSocialMedia from "./App_logo_and_social_media";
import ColorMania from "./Color_mania";
import Copyright from "./Copyright";
import EmailSubscribe from "./Email_subscribe";
import Support from "./Support";


function Footer():JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <footer id="footer" className={`${themeName}`}>
            <AppLogoAndSocialMedia />
            <Support />
            <ColorMania />
            <EmailSubscribe />
            <Copyright copyrightText="Copyright by Viper_JSX 2022" />
        </footer>
    );
}

export default Footer;