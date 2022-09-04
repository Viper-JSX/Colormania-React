import ColorClass from "../classes/Color";
import TableClass from "../classes/Table";
import UserClass from "../classes/User";
import { getItemFromLocalStorage } from "./get_item_from_locale_storage";

export function getGuestUserFromLocaleStorage():UserClass | null{
    const guestUserObject = getItemFromLocalStorage("guest_user");
    let guestUser = null;
    if(guestUserObject){
        guestUser = new UserClass(guestUserObject.nickname, "", "");

        guestUser.tables = guestUserObject.tables.map((table:TableClass):TableClass => {
            const recreatedTable = new TableClass(table.name);

            recreatedTable.colors = table.colors.map((color:ColorClass):ColorClass => {
                const recreatedColor = new ColorClass(color.name, color.rgbValue);
                return recreatedColor;
            });

            return recreatedTable;
        });
    }
    return guestUser;
}

//here you need to create new user again using avaliable fields, then set the same recreated tables which have the same recreated colors using classes (User, Table, Color);