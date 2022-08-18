export function sortByField(array: any, fieldName: string, order: "small-big" | "big-small"):any[]{
    if(array.length <= 1){
        return array;
    }

    const left = [];
    const right = [];
    const middleIndex = Math.floor(array.length / 2);
    const pivot = array[middleIndex];

    for(let i = 0; i < array.length; i++){
        if(i === middleIndex) continue;

        if(order === "small-big"){
            if(array[i][fieldName] <= pivot[fieldName]){
                left.push(array[i]);
            }
            else{
                right.push(array[i]);
            }
        }

        if(order === "big-small"){
            if(array[i][fieldName] >= pivot[fieldName]){
                left.push(array[i]);
            }
            else{
                right.push(array[i]);
            }
        }
    }

    return sortByField(left, fieldName, order).concat(pivot, sortByField(right, fieldName, order));
}
