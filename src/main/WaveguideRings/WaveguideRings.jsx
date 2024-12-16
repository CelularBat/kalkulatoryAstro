import React from 'react';

import '../KalkulatorKata.css'; 
import Slider from '../../components/Slider';
import TitleCard from '../../components/TitleCard';

import RysunekRings from './RysunekRings';
import useStateAndStorage from '../../hooks/useStateAndStorage';

function WaveguideRings({IsDarkTheme}) {
    const svg_W = 300;
    const svg_H = 200;
  
    const [SliderF, setSliderF] = useStateAndStorage(1700,"SliderF_wave");
    const [DishSize,setDishSize] = useStateAndStorage(100,"DishSize");
  
    const info = {
        title: "Waveguide Rings",
        para: "Original VE4MA Feed"
      }
  
      let L = 299792 / SliderF;

      const data = {
          length : L * 0.75,
          dHorn : L * 0.75,
          ringWidth : L * 0.5,
          ringDepth: L * 0.5,
          ringPos : L * 0.15,
          dBlock: L * 1.77,
          blockPerc: 100*(L * 1.77)/(DishSize*10)
      }
      console.log(data.blockPerc);
      L = L.toFixed(1);
      Object.keys(data).forEach(function(key) {
          data[key] = data[key].toFixed(0);
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

          <label>
            <Slider 
              minValue={10} 
              maxValue={300} 
              widthPx={200} 
              name="Dish size [cm]"
              onValueChange={setDishSize} 
              Value={DishSize} 
  
              IsDarkTheme={IsDarkTheme}
            />
          </label>

        </div>
    
        <div className='svg-container mobile-rotate ' style={{minWidth:"calc(min(600px,99vw))" }}>
          <RysunekRings {...{...data,L}}/>
        </div>

        <div className='Wzor-container'>
        <span style={{fontSize: "0.8rem", marginTop:"15px"}}>
            Based on: https://www.w1ghz.org/antbook/conf/high_efficiency_prime_feeds.pdf
        </span>
        </div>
        
      </div>
    );
  }

export default WaveguideRings;