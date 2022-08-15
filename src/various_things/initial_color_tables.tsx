import Color from "../classes/Color";
import TableClass from "../classes/Table";

const initialColorTables:TableClass[] = [
    new TableClass("Welcome table", new Date()),
    new TableClass("Initial overview", new Date()),
    new TableClass("Try your own", new Date()),
];

initialColorTables[0].colors = [
    new Color("Pink", new Date(), { r: 210, g: 50, b: 100 }),
    new Color("Some purple", new Date(), { r: 20, g: 150, b: 100 }),
    new Color("Dark", new Date(), { r: 10, g: 10, b: 10 }),
];

initialColorTables[1].colors = [
    new Color("Yellow", new Date(), { r: 0, g: 240, b: 150 }),
    new Color("Brown", new Date(), { r: 150, g: 150, b: 100 }),
    new Color("Dark", new Date(), { r: 10, g: 10, b: 10 }),
];

export default initialColorTables;