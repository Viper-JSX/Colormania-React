import styled from "styled-components";
import ColorClass from "../../../classes/Color";
import { RGBValue } from "../../../typescript/types";
import ColorInfoLabel from "./Color_info_label";

interface StyledColorProps{
    colorRgbValue: { r: number, g:number, b: number };
};


const StyledColor = styled.div<StyledColorProps>`
    width: max-content;
    aspect-ratio: 1/1;
    background-color: rgb(${(props) => props?.colorRgbValue.r }, ${(props) => props?.colorRgbValue.g}, ${(props) => props?.colorRgbValue.b} );
    border: 2px solid black;
    transition: 0.2s;

    &:hover > .colorInfoLabel{
        opacity: 1;
    }
`;

function Color({ color } : { color: ColorClass }):JSX.Element{

    return(
        <StyledColor className="color" colorRgbValue={color.rgbValue}>
            <ColorInfoLabel color={color} />
        </StyledColor>
    );
}

export default Color;