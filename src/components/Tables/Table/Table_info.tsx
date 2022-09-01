import { Link } from "react-router-dom";

function TableInfo({ tableName } : { tableName: string }):JSX.Element{
    return(
        <b className="tableNameAndLink">
            <span className="heading tableName">{tableName}</span>
            <br/>
            <Link to="/tables">{"<-"}Tables</Link>
        </b>
    );
}

export default TableInfo;