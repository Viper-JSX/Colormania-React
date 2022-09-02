import { useSelector } from "react-redux";
import { AppState } from "../../typescript/types";
import TextWithTitle from "../General_reusable_components/Text_with_title";
import ColorMania from "./Color_mania";
import EmailSubscribe from "./Email_subscribe";
import Support from "./Support";


function Footer():JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <footer id="footer" className={`${themeName}`}>
            <TextWithTitle title="ColorMania" text="Our app is designed to make you life more colorful" />
            <Support />
            <ColorMania />
            <EmailSubscribe />
        </footer>
    );
}

export default Footer;