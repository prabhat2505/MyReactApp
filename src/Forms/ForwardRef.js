import React  from 'react';

const ForwardRef=React.forwardRef((props,ref)=>{
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default ForwardRef