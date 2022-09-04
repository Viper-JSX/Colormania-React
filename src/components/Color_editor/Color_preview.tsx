import styled from "styled-components";
import { RGBValue } from "../../typescript/types";

const StyledColorPreview = styled.div<{ rgbValue: RGBValue }>`
    background-color: ${(props) => `rgb(${props.rgbValue.r}, ${props.rgbValue.g}, ${props.rgbValue.b})`};
`;

function ColorPreview({ rgbValue } : { rgbValue: RGBValue }):JSX.Element{
    console.log(rgbValue)

    return(
        <StyledColorPreview className="colorPreview" rgbValue={rgbValue} />
    );
}

export default ColorPreview;