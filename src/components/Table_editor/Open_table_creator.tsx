import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { animationDelayDifference } from "../../app_config/app_config";

function OpenTableCreator({ index } : { index: number }):JSX.Element{
    const themeName = useSelector((state:any) => state.theme.themeName);
    
    return(
        <Link className={`openTableCreator ${themeName}`} to={`create-table`} style={{ animationDelay: `${index * animationDelayDifference}s` }}>+</Link>
    );
}

export default OpenTableCreator;