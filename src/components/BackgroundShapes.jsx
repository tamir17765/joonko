import React from 'react';
import '../App.css';
import Cross from '../img/Group5934.svg'

function BackgroundShapes(){
    return(
        <div>
        <span className="Square1"></span>
        <span className="Square2"></span>
        <span className="Square3"></span>        
        <img src={Cross} className='Cross'/>
        <span className="circle"></span>
        </div>
    )
}

export default BackgroundShapes