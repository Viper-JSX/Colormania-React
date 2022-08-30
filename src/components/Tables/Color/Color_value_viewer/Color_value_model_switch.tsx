import { ColorValueModelSwitchProps } from "../../../../typescript/types";

function ColorValueModelSwitch({ currentColorModel, handleColorModelChange } : ColorValueModelSwitchProps ):JSX.Element{
    return(
        <nav className={`colorValueModelSwitch`}>
            <ul>
                <li className={ currentColorModel === "rgb" ? "active" : "" } onClick={() => handleColorModelChange("rgb")}>RGB</li>
                <li className={ currentColorModel === "hsl" ? "active" : "" } onClick={() => handleColorModelChange("hsl")}>HSL</li>
                <li className={ currentColorModel === "hex" ? "active" : "" } onClick={() => handleColorModelChange("hex")}>HEX</li>
            </ul>
        </nav>
    );  
}

export default ColorValueModelSwitch;