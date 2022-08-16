import Color from "../classes/Color";
import TableClass from "../classes/Table";

const initialColorTables:TableClass[] = [
    new TableClass("Welcome table"),
    new TableClass("Initial overview"),
    new TableClass("Try your own"),
];

initialColorTables[0].colors = [
    new Color("Pink", { r: 210, g: 50, b: 100 }),
    new Color("Some purple", { r: 20, g: 150, b: 100 }),
    new Color("Dark", { r: 10, g: 10, b: 10 }),
];

initialColorTables[1].colors = [
    new Color("Yellow", { r: 0, g: 240, b: 150 }),
    new Color("Brown", { r: 150, g: 150, b: 100 }),
    new Color("Dark", { r: 10, g: 10, b: 10 }),
];

export default initialColorTables;