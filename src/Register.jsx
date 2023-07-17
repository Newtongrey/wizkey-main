import { useState } from "react";  

export const Register = () => {
    const [email, setEmail] = useState ('');              //hook that captures values of what user inputs
    const [pass, setPass] = useState ('');
    const [name, setName] = useState ('');

    const handleSubmit = (e) => {                      // if we dont declare prevent default page will reload and lose state.
        e.preventDefault();
        console.log(email);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
         <label>Full name</label>
         <input value ={name} name="name" id="name" placeholder="full name" />
         <label htmlFor="email">email</label>
         <input value={email} onChange={(e) =>setEmail(e.target.value)}type="email" placeholder="youremail" /> 
         <label htmlFor="password">password</label>
         <input value={pass} onChange={(e) =>setPass(e.target.value)}type="password" placeholder="*********" /> 
         <button type="submit">Log In</button>
         </form>
         <button> already have an account? login here. </button>
     </>
    )
}