import { useSelector } from "react-redux";

import styled from "styled-components";
import { ColorProps } from "../../../typescript/types";
import ColorInfoLabel from "./Color_info_label";

interface StyledColorProps{
    colorRgbValue: { r: number, g:number, b: number };
};


const StyledColor = styled.div<StyledColorProps>`
    /*width: 100px;
    min-width: max-content;*/
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
    const themeName = useSelector((state: any) => state.theme.themeName);

    return(
        <StyledColor className={`color ${themeName}`} colorRgbValue={color.rgbValue}>
            {
                (handleColorDelete && tableName) ? 
                <>
                    <ColorInfoLabel tableName={tableName} color={color} handleColorDelete={handleColorDelete} />
                </>
                : 
                <></>
            }  
        </StyledColor>
    );
}

export default Color;