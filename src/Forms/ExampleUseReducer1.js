import React, { useEffect, useReducer, useRef } from 'react';
function ExampleUseReducer1() {
    const inputEl = useRef(null);
    
    const initialState=0;

    //reducer function should be defined with arg state and action
    //We can use multiple sate variable using dispatch by passing argument
    const reducer=(state,action) =>{
      if(action.type === "increment")
      return state + 1;
      else
      return state - 1;
      return state;
    }
    const [state,dispatch]=useReducer(reducer,initialState);
   
    return (
      <div>
        <p>{state}</p>
        <button onClick={() => dispatch({type:"increment"})}>+</button>
        <button onClick={() => dispatch({type:"Decrement"})}>-</button>
      
      </div>
    );
  }
  export default ExampleUseReducer1;