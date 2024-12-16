import React, { useState } from 'react';
import '../KalkulatorKata.css'; 
import Slider from '../../components/Slider';
import TitleCard from '../../components/TitleCard';

import Rysunek from './Rysunek';
import Wzor from './Wzor';
import useStateAndStorage from '../../hooks/useStateAndStorage';

function KalkulatorKata({IsDarkTheme,isCone}) {
  const svg_W = 200;
  const svg_H = 200;

  const [SliderW, setSliderW] = useStateAndStorage(120,"SliderW_kat");
  const [SliderH, setSliderH] = useStateAndStorage(30,'SliderH_kat');

  const info = {

      title: "Loop Feed",
    //  para: "with enhanced performance\nopening angle and F/D calculator",
      para: 
        <> 
          {"with enhanced performance"}
          <br />
          {"opening angle and F/D calculator"}
        </>
    }


  
 const angle_rad = Math.atan((SliderW/2)/SliderH); 
 const angle_deg = (angle_rad * (180 / Math.PI)).toFixed(2);

  return (
    <div className="kalkulator">
      <TitleCard IsDarkTheme={IsDarkTheme}
      title={info.title}
      paragraf={info.para}
      />

      <div className='sliders' style={{ marginBottom: '20px',marginTop: "10px" }} >
        <label>
          <Slider 
            minValue={5} 
            maxValue={200} 
            widthPx={200} 
            name="Diameter"
            onValueChange={setSliderW} 
            Value={SliderW} 

            IsDarkTheme={IsDarkTheme}
          />
        </label>
        <label style={{ marginLeft: '10px' }}>
          <Slider 
            minValue={5} 
            maxValue={200} 
            widthPx={200} 
            name="Height"
            onValueChange={setSliderH} 
            Value={SliderH} 

            IsDarkTheme={IsDarkTheme}
          />
        </label>
      </div>
      <div className='Wzor-container'>
        <Wzor beta_rad={angle_rad} beta_deg={angle_deg}/>
      </div>
  
      <div className='svg-container'>
        <Rysunek {...{SliderW,SliderH,angle_deg}}/>
      </div>

      <div className='Wzor-container'>
        <span style={{fontSize: "0.8rem", marginTop:"15px"}}>
            Based on:&nbsp;  
            <a href='http://www.om6aa.eu/Loop_Feed_with_enhanced_performance.pdf'>
              http://www.om6aa.eu/Loop_Feed_with_enhanced_performance.pdf
            </a>
        </span>
      </div>
      
    </div>
  );
}

export default KalkulatorKata;
