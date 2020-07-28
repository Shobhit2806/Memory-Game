import React, {Component ,useState ,useEffect} from 'react';
import Header from'./Header'
import Logo from './Logo'
import './App.scss'
import './global.scss'
import Welcomebox from './Welcomebox';
import Instructions from './Instructions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SelectGame from './SelectGame';
import useTheme from '../useTheme'
import {ThemeContext} from '../ThemeContext'
import GamePage from './GamePage'


const App = () => {
    const [theme, setTheme] = useTheme("blue","Theme");
 
    useEffect(() => {
      

      const getTheme = localStorage.getItem('Theme');
      // console.log(getTheme);
      if (getTheme === 'green') {
          setTheme('green');
      } else if (getTheme === 'brown') {
          setTheme('brown');
      } else {
          setTheme('blue');
      }

  }, []);

   
      return (
        <Router>
        <div className={`theme-${theme}`}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Logo />
          <Switch>
          
          
          <Route path='/' exact component={Welcomebox} />
          <Route path='/selectgame' component={SelectGame} />
          <Route path='/instructions' component={Instructions}/>
          <Route path='/game' component={GamePage} />
          </Switch>
          </ThemeContext.Provider>
        </div>
        </Router>
      );
    
  }
  
export default App