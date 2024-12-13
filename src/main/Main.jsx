import React from 'react';
import Pages from './Pages_index';

import { Route,Routes,Navigate } from 'react-router-dom';


function Main ({calc_names,IsDarkTheme}) {

    let calc_routes = calc_names.map(c=>{
        const Page = Pages[c.idx];
        return( 
        <Route key={c.name} path={c.path}
            element={<Page {...{IsDarkTheme}} />} />
        ) 
    });
    

    return (
        <>
            <Routes className='Main'>
                <Route path="/" element={<Navigate to={calc_names[2].path} />} />
                 {calc_routes}
            </Routes>   
        </>
        
    );
};

export default Main;