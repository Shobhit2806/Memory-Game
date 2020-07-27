import React from 'react'
import './Welcomebox.scss'
import {Link} from 'react-router-dom'

const Welcomebox = () => {
    return (
        
        <div className="box_container">
        <div className="box">
            <div className="box_title"><h1>Welcome</h1></div>
            <div className="box_content2">
                <Link to='/SelectGame'>
                <button className="box_start">Start Game</button>
                </Link>
                <Link to='/Instructions'>
                <button className="box_inst"> Instructions</button>
                </Link>
            </div>
        </div>
        </div>
        
    )
}

export default Welcomebox;