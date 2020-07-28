import React, { useContext,useEffect } from 'react'
import './SelectGame.scss'
import { useHistory } from "react-router-dom";
import ThemeCard from './ThemeCard'
import { ThemeContext } from '../ThemeContext'
import useTheme from '../useTheme'


const SelectGame = () => {
    const [active, setActive] = useTheme("Robots", "Active");
    const { setTheme } = useContext(ThemeContext)

    useEffect(() => {
        if (active === "Robots") {
            localStorage.setItem('Theme', 'blue');
            localStorage.setItem('Active', 'Robots');
            setTheme("blue");
        } else if (active === "Pokemon") {
            localStorage.setItem('Theme', 'green');
            localStorage.setItem('Active', 'Pokemon');
            setTheme("green");
        } else {
            localStorage.setItem('Theme', 'brown');
            localStorage.setItem('Active', 'Dogs');
            setTheme("brown");
        }
    }, );

    let history = useHistory();
    function handleClick()
    {
        history.push("/")
    }
    function handleClick2()
    {
        history.push("/game")
    }
    return (
        
        <div className="boxg_container">
           
            <div className="boxg">
            
                <div className="boxg_title"><h1>Choose Theme</h1></div>
                <div className="boxg_content">
                <ThemeCard
                    type='Robots'
                    imageWidth="80%"
                     active={active}
                     onClick={()=>setActive("Robots")}
                />
                <ThemeCard
                    type='Pokemon'
                    imageWidth="80%"
                     active={active}
                     onClick={()=>setActive("Pokemon")}
                    />
                <ThemeCard
                    type='Dogs'
                    imageWidth="106.5%"
                    active={active}
                    onClick={()=>setActive("Dogs")}
                />
                </div>
                <div className="boxg_contentbtn">
                
                <div className="boxg_btn">
                <button  className="boxg_backbtn" onClick={handleClick}>Back</button>
                <button  className="boxg_playbtn" onClick={handleClick2}>Play</button>
                </div>
               
                </div>
            </div>
            
        </div>
    )
}

export default SelectGame;


