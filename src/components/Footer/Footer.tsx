import { useSelector } from "react-redux";
import { AppState } from "../../typescript/types";
import TextWithTitle from "../General_reusable_components/Text_with_title";


function Footer():JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <footer id="footer" className={`${themeName}`}>
            <TextWithTitle title="ColorMania" text="Our app is designed to make you life more colorful" />
        </footer>
    );
}

export default Footer;