import React, { Component } from 'react';
import axios from 'axios';
class GetDataInSateMap extends React.Component {
  constructor(props){
  super(props)
    this.state={
      posts:[]
    }
  }
  componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
          //console.log(response);
          this.setState({posts:response.data})
       
        })
        .catch(error=>{
        console.log(error);
  
        })
  }
 render(){
   const {posts}=this.state
   return(
     <div>
       List of Posts:
       {
        posts.length?posts.map(posts=><div>{posts.title}</div>):null
       }
     </div>
   )
 }

  }
  
  export default GetDataInSateMap;