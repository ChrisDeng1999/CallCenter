import React, { useState } from "react";
import Axios from 'axios'

function Register() {

    const [fnameReg, setFnameReg] = useState('');
    const [lnameReg, setLnameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post('http://localhost3001/register', 
        {
            fname: fnameReg,
            lname: lnameReg,
            email: emailReg, 
            password: passwordReg,
        }).then((response) => 
        {
            console.log(response)
        });
    };

    return (
        <div>
            <div>
                <h1>Registration</h1>
                <label>First Name</label>
                <input 
                type ="text" 
                onChange={(e)=> {setFnameReg(e.target.value)}}/>
                <label>Last Name</label>
                <input 
                type ="text" 
                onChange={(e)=> {setLnameReg(e.target.value)}}/>
                <label>Email</label>
                <input 
                type ="text" 
                onChange={(e)=> {setEmailReg(e.target.value)}}/>
                <label>Password</label>
                <input type ="text" 
                onChange={(e)=> {setPasswordReg(e.target.value)}}/>
                <button onClick={register}>Register</button>
            </div>
        </div>
    )
};

export default Register;