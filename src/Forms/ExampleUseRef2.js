import React, { useEffect, useRef } from 'react';
function ExampleUseRef2() {
    const inputEl = useRef(null);
    
    useEffect(()=>{
      inputEl.current.focus();
    })
    return (
      <>
        <input ref={inputEl} type="text" />
      
      </>
    );
  }
  export default ExampleUseRef2;