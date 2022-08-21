import { DeleteColorButtonProps } from "../../../typescript/types";

function DeleteColorButton({ tableName, colorName, handleColorDelete } : DeleteColorButtonProps):JSX.Element{
    return(
        <button onClick={() => handleColorDelete({ tableName, colorName  })}>X</button>
    );
}

export default DeleteColorButton;