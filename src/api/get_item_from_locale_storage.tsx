import UserClass from "../classes/User";
import TableClass from "../classes/Table";

export function getItemFromLocalStorage<T>(itemName: string): any/*T | null*/{
    let itemString = localStorage.getItem(itemName); //JSON.parse(localStorage.getItem("guest_user"));
    let item = null;
    
    if(itemString){
        item = JSON.parse(itemString)
    }

    return item;
}