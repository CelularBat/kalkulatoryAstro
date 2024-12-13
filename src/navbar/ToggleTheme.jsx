
import React from 'react';
import './ToggleTheme.css';

function ToggleTheme({handleSwitch,IsDarkTheme}) {
  return (
    <label className="switch">
    <input type="checkbox" className='switch_checkbox' checked={!IsDarkTheme}
    hidden={true} onChange={(e)=>handleSwitch(!e.target.checked)}/>
    <div className="switch__wrapper">
      <div className="switch__toggle"></div>
    </div>
  </label>



  );
}

export default ToggleTheme;
