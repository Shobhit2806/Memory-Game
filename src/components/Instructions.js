import React from 'react'
import './instructions.scss'
import { useHistory } from "react-router-dom";


const Instructions = () => {
    let history = useHistory();
    function handleClick()
    {
        history.push("/")
    }
    return (
        <div className="boxi_container">
            <div className="boxi">
                <div className="boxi_title"><h1>Instructions</h1></div>
                <div className="boxi_content3">
                <ul>
                    <li>There will be 16 cards displayed on the screen.</li>
                    <li>Click on a card to flip it and memorize the picture.</li>
                    <li>You need to match the cards with same picture.</li>
                    <li>You will get 100 sec to find all the 8 pairs.</li>
                </ul>
               
                <button  className="boxi_backbtn" onClick={handleClick}>Back</button>
               
                </div>
            </div>
            
        </div>
    )
}

export default Instructions;


