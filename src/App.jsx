import {useState} from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import './App.css'

function App() {
  const [currentForm, setCurrentForm] =useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (
      <div className="App">
        {
          currentForm ==="login" ?<Login onFormSwitch={toggleForm}/> : <Register/>
        }
        

        
      </div>
);      
}

export default App
