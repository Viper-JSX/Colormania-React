import { useSelector } from "react-redux";
import UserClass from "../../classes/User";

function UserData():JSX.Element{
    const user: UserClass = useSelector((state:any) => state.user.user);

    return(
        <div className="userData">
            <b className="userNickname">{ user.nickname }</b>
            <br />
            <b className="userTablesAmount">Tables: {user.tables.length}</b>
            <br />
            <b className="userJoinDate">Join date: {user.joinDate.toDateString()}</b>
        </div>
    );
}

export default UserData;