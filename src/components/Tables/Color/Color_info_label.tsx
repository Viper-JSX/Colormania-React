import { useDispatch } from "react-redux";
import styled from "styled-components";

import ColorClass from "../../../classes/Color";
import { deleteColorFromTable } from "../../../redux/thunks";
import { ColorInfoLabelProps } from "../../../typescript/types";
import ColorValueInfo from "./Color_value_viewer/Color_value_info";
import ColorValueViewer from "./Color_value_viewer/Color_value_viewer";
import DeleteColorButton from "./Delete_color_button";

const StyledColorInfoLabel = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    background-color: rgba(220, 220, 220, 0.8);
    transition: 0.2s;
    opacity: 0;
`;


function ColorInfoLabel({ tableName, color, handleColorDelete } : ColorInfoLabelProps):JSX.Element{
    return(
        <StyledColorInfoLabel className="colorInfoLabel">
            <DeleteColorButton tableName={tableName} colorName={color.name}  handleColorDelete={handleColorDelete} />
            <ColorValueViewer colorRgbValue={color.rgbValue} />
        </StyledColorInfoLabel>
    );
}

export default ColorInfoLabel;