import { useState } from "react";
import { RegisterProps } from "../../typescript/types";

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
            <input type="text" value={nickname} placeholder="Nickname" onChange={handleNicknameChange} />
            <input type="text" value={login} placeholder="Login" onChange={handleLoginChange} />
            <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />

            <button onClick={(event) => handleRegister({ event, nickname, login, password })}>Register</button>
        </div>
    );
}

export default Register;