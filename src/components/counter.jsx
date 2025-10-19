import React , { useState } from 'react'
import './counter.css'

const counter = () => {

    // ek variable , ek function , ek initialization
    const [count , setCount] = useState(0);
    // initially centred
    // positiion is a state varaible , storring an obj with 2 propperties 
    // top and left
    const [position , setPosition] = useState({top:"20%" , left:"20%"});

  return (
    <div className='counter-container'>
        <p id='para'>You chased me {count} times</p>
        <button id='btn' 
        
            onClick={() => {
             setCount(count+1); 
            //  random number between 10&90 (in %)
              const randomTop = Math.floor(Math.random() * 80) + 10; //[0,90)
              const randomLeft = Math.floor(Math.random() * 80) + 10; 
            //   updates the position
              setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
             }}

               style={{
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                        transition: "top 0.3s ease, left 0.3s ease",
                    }}
        >Catch me</button>
    </div>
  )
}

export default counter
