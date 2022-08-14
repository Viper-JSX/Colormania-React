import styled from "styled-components";

import ColorClass from "../../../classes/Color";
import ColorValueInfo from "./Color_value_info";

const StyledColorInfoLabel = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    background-color: rgba(220, 220, 220, 0.8);
    transition: 0.2s;
    opacity: 0;
`;

function ColorInfoLabel({ color } : { color: ColorClass }):JSX.Element{
    return(
        <StyledColorInfoLabel className="colorInfoLabel">
            <ColorValueInfo colorValue={color.currentConvertedValue} />
        </StyledColorInfoLabel>
    );
}

export default ColorInfoLabel;