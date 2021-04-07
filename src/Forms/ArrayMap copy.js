import React from 'react';

function ArrayMap() {
  // Declare a new state variable, which we'll call "count"
  const olderArray =['prabhat','kumar','rana'];

  const newaray = olderArray.map(function (cavlue){
    return <li>{cavlue}</li>;
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