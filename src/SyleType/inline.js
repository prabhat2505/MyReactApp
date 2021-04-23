import React, { Component, useState } from 'react';
function Inline() {

const [isValid,setIsValid]=useState(false);
     
    return (
      <label style={{color:!isValid ? 'red':'black'}}>
        Click me
      </label>
    );
  }
  export default Inline;