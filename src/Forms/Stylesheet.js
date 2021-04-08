import React from 'react'
import  './Mystyle.css'
import  style from './Customstyle.module.css'

function Stylesheet(){

    return(
        <div>
            <h1 className='primary'>Hello</h1>
            <h1 className={style.sucess}>Hello</h1>
        </div>
    )
}
export default Stylesheet;