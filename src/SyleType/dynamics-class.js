import React, { Component, useState } from 'react';
function DynamicsClass() {

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
      <label className={`${!isValid ? 'invalid':''}`}>
        Dyanamic css
      </label>
      <button onClick={changeColorTogle}>Change</button>
      </div>
    );
  }
  export default DynamicsClass;