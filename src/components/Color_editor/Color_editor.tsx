import { ColorEditorProps } from "../../typescript/types";

function ColorEditor({ mode } : ColorEditorProps):JSX.Element{
    console.log(mode)
    return(
        <div className="colorEditor">
            <input type="color" />
        </div>
    );
}

export default ColorEditor;