import styled from "styled-components";
import ColorClass from "../../../classes/Color";
import { ColorProps, RGBValue } from "../../../typescript/types";
import ColorInfoLabel from "./Color_info_label";
import OpenColorEditor from "./Open_color_editor";

interface StyledColorProps{
    colorRgbValue: { r: number, g:number, b: number };
};


const StyledColor = styled.div<StyledColorProps>`
    width: 100px;
    min-width: max-content;
    aspect-ratio: 1/1;
    background-color: rgb(${(props) => props?.colorRgbValue.r }, ${(props) => props?.colorRgbValue.g}, ${(props) => props?.colorRgbValue.b} );
    border: 2px solid black;
    
    //&:hover{
    //    border-width: 0px;
    //}

    &:hover > .colorInfoLabel{
        opacity: 1;
    }
`;

function Color({ tableName, color, handleColorDelete } : ColorProps):JSX.Element{

    return(
        <StyledColor className="color" colorRgbValue={color.rgbValue}>
            {
                (handleColorDelete && tableName) ? 
                <>
                    <ColorInfoLabel tableName={tableName} color={color} handleColorDelete={handleColorDelete} />
                    <OpenColorEditor tableName={tableName} colorToEdit={{ oldColorName: color.name, rgbValue: color.rgbValue }} />
                </>
                : 
                <></>
            }  
        </StyledColor>
    );
}

export default Color;