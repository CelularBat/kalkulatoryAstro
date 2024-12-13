import React from 'react';
import './Navbar.css'
import ToggleTheme from './ToggleTheme';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const Navbar = ({handleThemeSwitch,IsDarkTheme,CurrentCalcIdx,setCurrentCalcIdx,calc_names}) => {


    const render_calc_names = calc_names.map(e=>{
        const c = (CurrentCalcIdx === e.idx)?
            "Navbar--calc-name __active"
            :"Navbar--calc-name";
        return (
            <Link to={e.path}>
             <span key={nanoid()} className={c}
             onClick={()=>{setCurrentCalcIdx(e.idx)}}
            >
                {e.name}
            </span>
            </Link>
            
        );
    }
    );

    const darkClass = IsDarkTheme?" _darkTheme":"";
    return (
        <nav className={"Navbar"+darkClass}>
            <div className='Navbar--label'>
                <span>Calculators:</span>
            </div>
            <div className='Navbar--names-container'>
            {render_calc_names}
            </div>
            
            <div className='toggle-container'>
                <ToggleTheme handleSwitch={handleThemeSwitch} IsDarkTheme={IsDarkTheme}/>
            </div>
            
        </nav>
    );
};

export default Navbar;