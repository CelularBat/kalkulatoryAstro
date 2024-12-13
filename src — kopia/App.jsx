import React from 'react'
import './index.css'
import Navbar from './navbar/Navbar.jsx'
import Main from './main/Main.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

const App = ()=>{
    const [IsDarkTheme ,setIsDarkTheme] = React.useState(false);
    const [CurrentCalcIdx,setCurrentCalcIdx] = React.useState(0);

    const calc_names_Ref = React.useRef([
      {name:"Loop Feed",
          path:"/LoopFeed",
          idx: 0
      },
      {
          name:"Truncated Cone",
          path:"/Truncated Cone",
          idx: 1 
      },
      {
          name: "Helicone Antenna",
          path:"/HeliconeAntenna",
          idx: 2
      },
      {
          name: "Waveguide Rings",
          path:"/WaveguideRings",
          idx: 3
      }
    ]);


    React.useEffect(()=>{
        if (IsDarkTheme) {
            document.body.classList.add('_darkTheme'); 
          } else {
            document.body.classList.remove('_darkTheme'); 
          }
      
          
          return () => {
            document.body.classList.remove('_darkTheme'); 
          };
    },[IsDarkTheme]);
    

    
    return(
        <BrowserRouter>
        <Navbar calc_names={calc_names_Ref.current} handleThemeSwitch={setIsDarkTheme}  {...{IsDarkTheme,CurrentCalcIdx,setCurrentCalcIdx}}/>
        <Main {...{IsDarkTheme,CurrentCalcIdx}}/>
        </BrowserRouter>
    );
}

export default App;
