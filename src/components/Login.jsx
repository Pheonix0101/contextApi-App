import React, { useState, useContext } from "react";
import userContext from "../context/userContext";

import "../App.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password});

  };
  return (
    <div>
      <input 
      type="text" 
      value={username}
      onChange={(e)=> setUsername(e.target.value)}
       placeholder="username" 
       id="user" 
       />
      

      <input 
      type="text"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      placeholder="password" 
      id="pass"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
