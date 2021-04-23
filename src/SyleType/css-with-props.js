import React, { Component, useState } from 'react';
import styled from 'styled-components';

const FormControl=styled.div`

& input{
    border:1px solid ${props=>(props.invalid ? 'red' : '#ccc')};
    background:${props=>props.invalid ? 'red' : '#ccc'};
}
`;
function CssWithProps() {

const [isValid,setIsValid]=useState(false);

    return (
        <div>
        <FormControl invalid={!isValid}>
        <input type="text"></input>
        </FormControl>
      </div>
    );
  }
  export default CssWithProps;