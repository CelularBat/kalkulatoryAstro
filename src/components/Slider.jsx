import React from 'react';
import './Slider.css';

function Slider({ minValue, maxValue, widthPx, name, onValueChange, Value,
  IsDarkTheme
 }) {
  const handleSliderChange = (event) => {
    const v = event.target.value;
    onValueChange(Number(v));
  };

  const handleInputChange = (event) => {
    const v = event.target.value;
    onValueChange(Number(v));
  };

  const darkClass = IsDarkTheme?" _darkTheme":"";
  return (
    <div className="slider-container" style={{ width: `${widthPx}px` }}>
      <div className="slider-label-container">
        <label className={"slider-label"+darkClass}>{name}:</label>
        <input
          type="number"
          className="slider-input"
          min={minValue}
          max={maxValue}
          value={Value}
          onChange={handleInputChange}
          onFocus={(e)=>{e.target.select()}}
        />
      </div>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={Value}
        onChange={handleSliderChange}
        className="slider"
      />
    </div>
  );
}

export default Slider;
