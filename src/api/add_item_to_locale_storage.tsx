export function addItemToLocaleStorage<T>(itemName: string, item: any):boolean{
    let added = false;

    if(item){
        localStorage.setItem(itemName, JSON.stringify(item));
    }

    return added;
}