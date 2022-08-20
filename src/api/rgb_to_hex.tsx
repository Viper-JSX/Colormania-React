import { RGBValue } from "../typescript/types";

export function rgbToHex( rgb: RGBValue ):string{
    const numbersString = rgb.r.toString(16) + rgb.g.toString(16) + rgb.b.toString(16);
    console.log(numbersString);

    const hex = `#${numbersString}`;

    return hex;
}  