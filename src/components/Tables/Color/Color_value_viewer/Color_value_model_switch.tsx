import { ColorValueModelSwitchProps } from "../../../../typescript/types";

function ColorValueModelSwitch({ handleColorModelChange } : ColorValueModelSwitchProps ):JSX.Element{
    return(
        <nav className={`colorValueModelSwitch`}>
            <ul>
                <li onClick={() => handleColorModelChange("rgb")}>RGB</li>
                <li onClick={() => handleColorModelChange("hsl")}>HSL</li>
                <li onClick={() => handleColorModelChange("hex")}>HEX</li>
            </ul>
        </nav>
    );  
}

export default ColorValueModelSwitch;