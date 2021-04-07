import React from 'react';

function ArrayMap() {
  // Declare a new state variable, which we'll call "count"
//   const olderArray =['prabhat','kumar','rana'];

//   const newaray = olderArray.map(function (cavlue){
//     return <li>{cavlue}</li>;
//     })


const olderArray =[
    {id:1,name:'prabhat',degree:'btech'},
    {id:2,name:'rana',degree:'maca'},
    {id:3,name:'rahul',degree:'bca'},
];
  const newaray = olderArray.map((cavlue)=>{
    return <li>id:{cavlue.id} name:{cavlue.name} degree:{cavlue.degree}</li>;
   })
  return (
    <div>
    <ul>

    {newaray}
    
    </ul>
    </div>
  );
}

export default ArrayMap;