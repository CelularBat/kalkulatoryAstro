import React from 'react'
import './index.css'
import Navbar from './navbar/Navbar.jsx'
import Main from './main/Main.jsx'
import {HashRouter} from 'react-router-dom'

const App = ()=>{
    const [IsDarkTheme ,setIsDarkTheme] = React.useState(false);

    const calc_names_Ref = React.useRef([
      {name:"Loop Feed",
          path:"/LoopFeed",
          idx: 0
      },
      {
          name:"Truncated Cone",
          path:"/TruncatedCone",
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
        <HashRouter>
          <Navbar calc_names={calc_names_Ref.current} handleThemeSwitch={setIsDarkTheme}  {...{IsDarkTheme}}/>
          <Main calc_names={calc_names_Ref.current} {...{IsDarkTheme}}/>
        </HashRouter>
    );
}

export default App;
