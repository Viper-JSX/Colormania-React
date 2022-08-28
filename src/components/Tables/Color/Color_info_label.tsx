import { useSelector } from "react-redux";
import styled from "styled-components";

import { ColorInfoLabelProps } from "../../../typescript/types";
import ColorValueViewer from "./Color_value_viewer/Color_value_viewer";
import DeleteColorButton from "./Delete_color_button";
import OpenColorEditor from "./Open_color_editor";

const StyledColorInfoLabel = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    transition: 0.2s;
    opacity: 0;
`;


function ColorInfoLabel({ tableName, color, handleColorDelete } : ColorInfoLabelProps):JSX.Element{
    const themeName = useSelector((state: any) => state.theme.themeName);

    return(
        <StyledColorInfoLabel className={`colorInfoLabel ${themeName}`}>
            <DeleteColorButton tableName={tableName} colorName={color.name}  handleColorDelete={handleColorDelete} />
            <b className="colorName">{color.name}</b>
            <ColorValueViewer colorRgbValue={color.rgbValue} />
            <OpenColorEditor tableName={tableName} colorToEdit={{ oldColorName: color.name, rgbValue: color.rgbValue }} />
        </StyledColorInfoLabel>
    );
}

export default ColorInfoLabel;