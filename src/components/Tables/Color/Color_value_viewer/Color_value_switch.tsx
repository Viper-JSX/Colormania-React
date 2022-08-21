import React from "react";

function ColorValueModelSwitch({ handleColorModelChange } : { handleColorModelChange: (event: React.TouchEvent<HTMLLIElement>) => void }):JSX.Element{
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