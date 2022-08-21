import ColorValueInfo from "./Color_value_info";
import ColorValueModelSwitch from "./Color_value_switch";

function ColorValueViewer(){
    return(
        <div className="colorValueViewer">
            <ColorValueModelSwitch />
            <ColorValueInfo />
        </div>
    );
}

export default ColorValueViewer;