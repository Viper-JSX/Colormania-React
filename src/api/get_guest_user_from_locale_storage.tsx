import UserClass from "../classes/User";
import { getItemFromLocalStorage } from "./get_item_from_locale_storage";

export function getGuestUserFromLocaleStorage():UserClass | null{
    const guestUserObject = getItemFromLocalStorage("guestUser");
    let guestUser = null;

    if(guestUserObject){
        guestUser = new UserClass(guestUserObject.nickname, "", "");

        guestUser.tables = guestUserObject.tables;
    }

    return guestUser;
}