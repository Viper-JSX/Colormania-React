import iro from '@jaames/iro';
import ColorClass from "../classes/Color";

import TableClass from "../classes/Table";
import { FilterTablesParams } from "../typescript/types"

function filterTables( { tables, filterOptions, order="small-big" } : FilterTablesParams ):TableClass[]{
    let filtered = tables.filter((table) => table.name.toLowerCase().indexOf(filterOptions.searchTerm.toLowerCase()) >= 0);
    
    if(filterOptions.sortBy === "name"){
        filtered = filtered.sort((a, b) => order === "small-big" ?  (a.name[0] > b.name[0] ? 1 : -1) : (a.name[0] < b.name[0] ? 1 : -1) ); 

    }
    else if(filterOptions.sortBy === "date"){
        filtered = filtered.sort((a, b) => order === "small-big" ? (a.creationDate.getTime() > b.creationDate.getTime() ? 1 : -1) : (a.creationDate.getTime() < b.creationDate.getTime() ? 1 : -1) );
    }

    return filtered;
}

export default filterTables;