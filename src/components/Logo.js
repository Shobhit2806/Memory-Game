import React, { useContext , useEffect,useState } from 'react'
import Logo1 from '../assets/logo.png'
import Logo2 from '../assets/logo-2.png'
import Logo3 from '../assets/logo-3.png'
import './Logo.scss'
import { ThemeContext } from '../ThemeContext'


const Logo = () => {

    const [logo,setLogo] = useState(Logo1);
    const { theme } = useContext(ThemeContext);

    const getLogo = () => {
        if (theme === 'brown') {
            setLogo(Logo3);
        } else if (theme === 'green') {
            setLogo(Logo2);
        } else {
            setLogo(Logo1);
        }
    };

    useEffect(() => {
        getLogo();
    }, [theme]);


    return (
        <div className="front">
                <div className="header__logo">
                    <img src={logo} alt="logo" width="30%"/>
                </div>
            
        </div>
    )
}   
export default Logo;