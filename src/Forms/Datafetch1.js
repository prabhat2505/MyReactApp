import React, { useState,useEffect } from 'react';
import axios from 'axios';
function Datafetch1() {
    // Declare a new state variable, which we'll call "count"
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false)
            setPost(response.data)
       
        })
        .catch(error=>{
            setLoading(false)
            setPost({})
  
        })
    })
    return (
      <div>
        {loading? 'Loading':post.title}
 
      </div>
    );
  }
  
  export default Datafetch1;