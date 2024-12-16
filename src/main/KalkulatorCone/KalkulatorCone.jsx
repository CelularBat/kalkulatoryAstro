import React, { useState } from 'react';
import '../KalkulatorKata.css'; 
import Slider from '../../components/Slider';
import TitleCard from '../../components/TitleCard';

import RysunekCone from './RysunekCone';
import Wzor from '../KalkulatorKata/Wzor';
import useStateAndStorage from '../../hooks/useStateAndStorage';

function KalkulatorCone({IsDarkTheme}) {
  const svg_W = 200;
  const svg_H = 200;

  const [SliderD1, setSliderD1] = useStateAndStorage(120,"SliderD1_Cone");
  const [SliderH, setSliderH] = useStateAndStorage(30,'SliderH_Cone');
  const [SliderPerc, setSliderPerc] = useStateAndStorage(150,"SliderPerc_Cone");

  const info = {
      title: "Truncated cone",
      para: "opening angle and F/D calculator"
    }



 let d2 = (SliderPerc/100 * SliderD1); 

 const angle_rad = Math.atan((d2/2)/SliderH); 
 const angle_deg = (angle_rad * (180 / Math.PI)).toFixed(2);

 d2 = d2.toFixed(2);


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
            name="Bottom diameter"
            onValueChange={setSliderD1} 
            Value={SliderD1} 

            IsDarkTheme={IsDarkTheme}
          />
        </label>

        <label>
          <Slider 
            minValue={100} 
            maxValue={500} 
            widthPx={200} 
            name={<span>Top diameter <br/>[% of the bottom]</span>}
            onValueChange={setSliderPerc} 
            Value={SliderPerc} 

            IsDarkTheme={IsDarkTheme}
          />
        </label>

        <label>
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
        <RysunekCone {...{SliderD1,SliderH,angle_deg,d2}}/>
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

export default KalkulatorCone;
