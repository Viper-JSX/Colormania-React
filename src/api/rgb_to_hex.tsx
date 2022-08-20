import { RGBValue } from "../typescript/types";

export function rgbToHex( rgb: RGBValue ):string{

    const partR = rgb.r.toString(16).length > 1 ? rgb.r.toString(16) : "0" + rgb.r.toString();
    const partG = rgb.g.toString(16).length > 1 ? rgb.g.toString(16) : "0" + rgb.g.toString();
    const partB = rgb.b.toString(16).length > 1 ? rgb.b.toString(16) : "0" + rgb.b.toString();

    const numberString = partR + partG + partB;
    const hex = `#${numberString}`;

    return hex;
}  