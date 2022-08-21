import React from "react";
import { ColorValueModelSwitchProps } from "../../../../typescript/types";

function ColorValueModelSwitch({ handleColorModelChange } : ColorValueModelSwitchProps ):JSX.Element{
    return(
        <nav>
            <ul>
                <li>RGB</li>
                <li>HSL</li>
            </ul>
        </nav>
    );  
}

export default ColorValueModelSwitch;