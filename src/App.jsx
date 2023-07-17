import {useState} from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import './App.css'

function App() {
  const [currentForm, setCurrentForm] =useState('login');

  return (
      <div className="App">
        {
          currentForm ==="login" ?<Login/> : <Register/>
        }
        

        
      </div>
);      
}

export default App
