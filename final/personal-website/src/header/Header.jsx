import { useState } from 'react';
import './Header.css';
import changeTheme from './headerScript';

const Header = ({setPage}) => { 

    const [drop, setDrop] = useState(false);
    const [light, setLight] = useState(false);
    changeTheme(light);

    return (
        <header>
            <div>
                <title>Personal Website of Liangxi Liu</title>
                <a className='skip' href="#main">Skip to content</a>
                <div id="menu"> 
                    <button id="menu-bar" onClick={() => setDrop(!drop)} className={drop ? "change" : null}>
                        <div id="bar1" className="bar"></div>
                        <div id="bar2" className="bar"></div>
                        <div id="bar3" className="bar"></div>
                    </button>
                    <nav className={drop ? "nav change" : "nav"} id="nav">
                        <ul>
                        <li><button onClick={() => setPage(0)}>Introduction</button></li>
                        <li><button onClick={() => setPage(1)}>Education</button></li>
                        <li><button onClick={() => setPage(2)}>Project</button></li>
                        <li><button onClick={() => setPage(3)}>Contact</button></li>
                        </ul>
                    </nav> 
                </div>
                <div className={drop ? "menu-bg change-bg" : "menu-bg"} id="menu-bg"></div>
            </div>
            <div className='header-bar'>
                <div className='header-indent'></div>
                <h1><i className='header-text'>Liangxi's Space!</i></h1>
                <div className='theme-wrap'>
                    <div className='theme-text'>{light? "Dark" : "Light" }</div>
                    <button className={light? "sun-dark" : "sun" } onClick={() => {
                                        changeTheme(!light);
                                        setLight(!light);
                    }}></button>
                    <div className='theme-indent'></div>
                    
                </div>
                
            </div>

        </header>
    );
}

export default Header;