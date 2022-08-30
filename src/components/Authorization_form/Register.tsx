import { useState } from "react";
import { RegisterProps } from "../../typescript/types";
import GoToLinkButton from "../General_reusable_components/Go_to_link_button";

function Register({ handleRegister } : RegisterProps):JSX.Element{
    const [ nickname, setNickname ] = useState("");
    const [ login, setLogin ] = useState("");
    const [ password, setPassword ] = useState("");

    function handleNicknameChange(event: React.ChangeEvent<HTMLInputElement>):void{
        setNickname(event.target.value);
    }

    function handleLoginChange(event: React.ChangeEvent<HTMLInputElement>):void{
        setLogin(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>):void{
        setPassword(event.target.value);
    }

    return(
        <div className="register">
            <input className="nicknameInput" type="text" value={nickname} placeholder="Nickname" onChange={handleNicknameChange} />
            <br />
            <input className="loginInput" type="text" value={login} placeholder="Login" onChange={handleLoginChange} />
            <br />
            <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
            <br />
            <button className="registerButton" onClick={(event) => handleRegister({ event, nickname, login, password })}>Register</button>
            <GoToLinkButton path="/user">Cancel</GoToLinkButton>
        </div>
    );
}

export default Register;