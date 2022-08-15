import { useSelector } from "react-redux";
import { ColorModeSwitchProps } from "../../../typescript/types";

function ColorModeSwitch({ handleColorModeChange } : ColorModeSwitchProps):JSX.Element{
    const colorMode = useSelector((state : any) => state.tablesFilter.colorMode);

    return(
        <select className="colorModeSwitch" value={colorMode} onChange={handleColorModeChange}>
            <optgroup>
                <option value="rgb">RGB</option>
                <option value="hsl">HSL</option>
            </optgroup>
        </select>
    );
}

export default ColorModeSwitch;