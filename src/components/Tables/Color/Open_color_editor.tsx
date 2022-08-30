import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { stringToUrl } from "../../../api/string_to_url";
import { OpenColorEditorProps } from "../../../typescript/types";

function OpenColorEditor({ tableName, colorToEdit } : OpenColorEditorProps):JSX.Element{
    const themeName = useSelector((state:any) => state.theme.themeName);
    
    return(
        <Link className={`openColorEditor ${themeName}`} to={`${stringToUrl(colorToEdit.oldColorName)}/edit`} state={ { tableName, colorToEdit }}>Edit</Link>
    );
}

export default OpenColorEditor;

//if you write to="/edit" inside Link / NavLink - it will be absolute pat, if to="edit" -it's a relative path