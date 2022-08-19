import { RGBValue } from "../typescript/types";

export function hexToRgb( hex: string ):RGBValue{
    const rgb: RGBValue = { r: 0, g: 0, b: 0 };
    const trimmedHex = hex.replace("#", "");

    rgb.r = parseInt(trimmedHex.substring(0, 2), 16);
    rgb.g = parseInt(trimmedHex.substring(2, 4), 16);
    rgb.b = parseInt(trimmedHex.substring(4), 16);
    
    return rgb;
}
