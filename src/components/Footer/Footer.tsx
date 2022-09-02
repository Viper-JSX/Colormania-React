import { useSelector } from "react-redux";
import { AppState } from "../../typescript/types";
import About from "./About";
import OurTeam from "./Our_team";
import Partners from "./Partners";
import Projects from "./Projects";

function Footer():JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <footer id="footer" className={`${themeName}`}>
            <Projects />
            <Partners />
            <OurTeam />
            <About />
        </footer>
    );
}

export default Footer;