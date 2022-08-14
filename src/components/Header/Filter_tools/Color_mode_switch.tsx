import { ColorModeSwitchProps } from "../../../typescript/types";

function ColorModeSwitch({ handleColorModeChange } : ColorModeSwitchProps):JSX.Element{
    return(
        <select className="colorModeSwitch">
            <optgroup>
                <option value="rgb">RGB</option>
                <option value="hsl">HSL</option>
            </optgroup>
        </select>
    );
}

export default ColorModeSwitch;