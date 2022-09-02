import { Link } from "react-router-dom";
import GoToLinkButton from "../../General_reusable_components/Go_to_link_button";

function TableInfo({ tableName } : { tableName: string }):JSX.Element{
    return(
        <b className="tableNameAndLink">
            <span className="heading tableName">{tableName}</span>
            <br/>
            <GoToLinkButton path="/tables">{"<-"}Home page</GoToLinkButton>
        </b>
    );
}

export default TableInfo;