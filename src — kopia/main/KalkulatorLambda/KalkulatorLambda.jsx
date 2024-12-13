import React, { useState } from 'react';
import '../KalkulatorKata.css'; 
import Slider from '../../components/Slider';
import TitleCard from '../../components/TitleCard';

import RysunekLambda from './RysunekLambda';


function KalkulatorLambda({IsDarkTheme}) {
  const svg_W = 300;
  const svg_H = 200;

  const [SliderF, setSliderF] = useState(1700);

  const info = {
      title: "Helicone antenna",
      para: "optimal dimensions calculator"
    }

    let L = 299792 / SliderF;
    const data = {
        d1 : L * 0.75,
        d2 : L * 2.5,
        h : L * 0.5,
        dh : L / Math.PI,
        s : 0.14*L,
        lh : 8*0.14*L
    }

    L = L.toFixed(1);
    Object.keys(data).forEach(function(key) {
        data[key] = data[key].toFixed(1);
    });


  return (
    <div className="kalkulator">
      <TitleCard IsDarkTheme={IsDarkTheme}
      title={info.title}
      paragraf={info.para}
      />
      
      <div className='sliders' style={{ marginBottom: '20px',marginTop: "10px" }} >
        <label>
          <Slider 
            minValue={1000} 
            maxValue={10000} 
            widthPx={200} 
            name="Frequency [Mhz]"
            onValueChange={setSliderF} 
            Value={SliderF} 

            IsDarkTheme={IsDarkTheme}
          />
        </label>
      </div>
  
      <div className='svg-container' style={{minWidth:"calc(min(500px,99vw))" }}>
        <RysunekLambda {...{...data,L}}/>
      </div>

      <div className='Wzor-container'>
        <span style={{fontSize: "0.8rem", marginTop:"10px"}}>
            Based on: https://www.researchgate.net/publication/224322359_On_the_optimal_dimensions_of_helical_antenna_with_truncated-cone_reflector
        </span>
      </div>

      
    </div>
  );
}

export default KalkulatorLambda;
