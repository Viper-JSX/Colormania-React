import { DeleteColorButtonProps } from "../../../typescript/types";

function DeleteColorButton({ tableName, colorName, handleColorDelete } : DeleteColorButtonProps):JSX.Element{
    return(
        <button className="deleteColorButton" onClick={() => handleColorDelete({ tableName, colorName  })}>X</button>
    );
}

export default DeleteColorButton;