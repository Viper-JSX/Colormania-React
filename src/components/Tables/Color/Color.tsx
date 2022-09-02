import { useSelector } from "react-redux";

import styled from "styled-components";
import { animationDelayDifference } from "../../../app_config/app_config";
import { AppState, ColorProps, RGBValue } from "../../../typescript/types";
import ColorInfoLabel from "./Color_info_label";

interface StyledColorProps{
    colorRgbValue: RGBValue;
    index: number;
};


const StyledColor = styled.div<StyledColorProps>`
    aspect-ratio: 1/1;
    background-color: rgb(${(props) => props?.colorRgbValue.r }, ${(props) => props?.colorRgbValue.g}, ${(props) => props?.colorRgbValue.b} );
    border: 2px solid black;
   //animation-delay: ${(props) => props.index * 11 + "s"};


    &:hover > .colorInfoLabel{
        opacity: 1;
    }
`;

function Color({ tableName, color, index, handleColorDelete } : ColorProps):JSX.Element{
    const themeName = useSelector((state: AppState) => state.theme.themeName);

    return(
        <StyledColor className={`color ${themeName}`} index={index} colorRgbValue={color.rgbValue} style={{ animationDelay: `${index * animationDelayDifference}s` }}>
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