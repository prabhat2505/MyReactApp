import React, { useState } from 'react';

function BasicForm(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [allEntry,setAllEntry]=useState([]);

    const submitForm=(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password};
        setAllEntry([... allEntry,newEntry]);
    }

    return(
        <div>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit">Login</button>
       
        </form>
        <div>
            {
                allEntry.map((curElem) =>{
                    return(
                        <div>
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>
                        </div>
                        
                    )
                })
            }
        </div>
        </div>
    )
}
export default BasicForm;