import React, { Component, useState } from 'react';
function Inline() {

const [isValid,setIsValid]=useState(false);
const changeColorTogle= ()=>{
    if(!isValid)
    {
        setIsValid(true)
    }
    else {
        setIsValid(false)
    }
    
}
    return (
        <div>
      <label style={{color:!isValid ? 'red':'black'}}>
        Click me
      </label>
      <button onClick={changeColorTogle}>Change</button>
      </div>
    );
  }
  export default Inline;