import React from 'react';
import KalkulatorKata from './KalkulatorKata/KalkulatorKata';
import KalkulatorCone from './KalkulatorCone/Kalkulatorcone';
import KalkulatorLambda from './KalkulatorLambda/KalkulatorLambda';


const Main = ({IsDarkTheme,CurrentCalcIdx}) => {

    let calc_content;
    switch (CurrentCalcIdx){
        case 0: calc_content = <KalkulatorKata {...{IsDarkTheme}} />;
            break;
        case 1: calc_content = <KalkulatorCone {...{IsDarkTheme}} />
            break;
        case 2: calc_content = <KalkulatorLambda {...{IsDarkTheme}} />
        break;
    }

    return (
        <div className='Main'>
        {calc_content}
        </div>
    );
};

export default Main;