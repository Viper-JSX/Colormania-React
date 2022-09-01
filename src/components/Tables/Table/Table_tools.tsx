import { TableToolsProps } from "../../../typescript/types";
import GoToLinkButton from "../../General_reusable_components/Go_to_link_button";
import Search from "../../General_reusable_components/Search";

function TableTools({ colorSearchTerm, handleSearchTermChange } : TableToolsProps):JSX.Element{

    return(
        <div className="tableTools">
            <GoToLinkButton path="edit">Edit table</GoToLinkButton>
            <Search value={colorSearchTerm} placeholder={"Type color name"}  handler={handleSearchTermChange} />
    </div>
    );
}

export default TableTools;