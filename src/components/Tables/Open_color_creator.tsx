import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { animationDelayDifference } from "../../app_config/app_config";
import { AppState } from "../../typescript/types";

function OpenColorCreator({ tableName, index } : { tableName: string, index: number}):JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);
    
    return(
        <NavLink className={`openColorCreator ${themeName}`} to={"add-color"} state={{tableName: tableName}} style={{ animationDelay: `${index * animationDelayDifference}s` }}>
            <span className="plusSign">+</span>
        </NavLink>
    );
}

export default OpenColorCreator;