import { useState } from "react";

import './Login.css';
import '../../style/colors.css';

function LogIn() {
    const [credentials, setCredentials] = useState({
        user: "", password: ""
    });
    const [isLoginPage, setIsLoginPage]= useState(true);

    function renderLogIn() {
        return (
            <div className="log-in">
                <div className="log-in-card dark-sc dark-text">
                    <h2>Welcome back to Canon!</h2>
                    <form>
                        <label>
                            Username/Email:
                            <input name="user" type="text"/>
                        </label>
                        <br/>
                        <label>
                            Password:
                            <input name="user" type="password"/>
                        </label>
                        <br/>
                        <label>
                            Remember me:
                            <input className="input-checkbox" name="rememberme" type="checkbox"/>
                        </label>
                        <br/>
                        <button className="button dark-confirm-button">Log-in</button>
                    </form>
                    <br/>
                    <button className="button dark-transparent-button" onClick={() => setIsLoginPage(false)}>{"Create an account"}</button>
                </div>
            </div>
        );
    }

    function renderSignUp() {
        return(
            <div className="log-in">
                <div className="log-in-card dark-sc dark-text">
                    <h2>Register on Canon</h2>
                    <form>
                        <label>
                            Choose an username:
                            <input name="user" type="text"/>
                        </label>
                        <br/>
                        <label>
                            Email:
                            <input name="user" type="text"/>
                        </label>
                        <br/>
                        <label>
                            Password:
                            <input name="user" type="password"/>
                        </label>
                        <br/>
                        <button className="button dark-confirm-button">Register</button>
                    </form>
                    <br/>
                    <button className="button dark-transparent-button" onClick={() => setIsLoginPage(true)}>{"Log using an existing account"}</button>
                </div>
            </div>
        );
    }


    return (
        <>
        {isLoginPage ? renderLogIn() : renderSignUp()}    
        </>
    )
}

export default LogIn;