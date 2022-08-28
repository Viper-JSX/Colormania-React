import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


function OpenColorCreator({ tableName } : { tableName: string}):JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);
    
    return(
        <NavLink className={`openColorCreator ${themeName}`} to={"add-color"} state={{tableName: tableName}}>
            <span className="plusSign">+</span>
                
                {/*
                    <br />
                    <span className="text" >Add color</span>
                */
                }
        </NavLink>
    );
}

export default OpenColorCreator;