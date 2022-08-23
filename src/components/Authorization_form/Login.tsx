import React, { useState } from "react";
import { LoginProps } from "../../typescript/types";

function Login({ handleLogin } : LoginProps):JSX.Element{
    const [ login, setLogin ] = useState("");
    const [ password, setPassword ] = useState("");

    function handleLoginChange(event: React.ChangeEvent<HTMLInputElement>):void{
        setLogin(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>):void{
        setPassword(event.target.value);
    }

    return(
        <div className="login">
            <form>
                <input type="text" value={login} onChange={handleLoginChange} />
                <input type="password" value={password} onChange={handlePasswordChange} />
                <button type="submit" onClick={(event: React.MouseEvent):void => {handleLogin({ event, login, password })}}>Login</button>
            </form>
        </div>
    );
}

export default Login;