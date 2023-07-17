import React, { useState, usestate } from "react";        ////// import for constant

export const Login = () => {
    const [email, setEmail] = useState ('')                //hook that captures values of what user inputs
    const [password, setPass] = useState ('')
    return (
       <form>
        <label for="email">email</label>
        <input value={email} onChange={(e) =>setEmail(e.target.value)}type="email" placeholder="youremail" /> 
        <label for="password">password</label>
        <input value={password} onChange={(e) =>setEmail(e.target.value)}type="password" placeholder="*********" /> 
        <button>Log In</button>
        </form>
    )
}