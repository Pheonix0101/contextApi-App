import { useContext, useState } from 'react'
import userContext from '../context/userContext';

import "../App.css"

function Name() {
    const [name, setName] = useState("");

    const {setUser} = useContext(userContext);

    const handleClick = (e)=>{
        e.preventDefault();
        setUser({name});
        console.log(name)
    };

  return (
    
    <div>
        <input type="text" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        name="" 
        placeholder='Enter Your Name' 
        id="name"
        />
        <br/>
        <button onClick={handleClick}>save Name</button>
    </div>
    
  )
}

export default Name