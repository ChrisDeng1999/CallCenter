import React from "react";

function Login() {
    return (
        <div>
            <div>
            <h1>Login</h1>
                <input type ="text" placeholder="Email" />    
                <input type ="password" placeholder="Password" />
                <button>Login</button>
            </div>
            <button><a href="/">Home</a></button>
        </div>
    )
};

export default Login;