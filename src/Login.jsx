import { useState } from "react";       ////// import for constant

export const Login = () => {
    const [email, setEmail] = useState ('');              //hook that captures values of what user inputs
    const [pass, setPass] = useState ('');
    
    const handleSubmit = (e) => {                      // if we dont declare prevent default page will reload and lose state.
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
       <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) =>setEmail(e.target.value)}type="email" placeholder="youremail" /> 
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) =>setPass(e.target.value)}type="password" placeholder="*********" /> 
        <button type="submit">Log In</button>
        </form>
        <button> dont have an account? register here. </button>
    </>
    )
}