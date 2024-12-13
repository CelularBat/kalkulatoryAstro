import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

import React from 'react';

const Wzor = ({beta_rad,beta_deg}) => {

    let fd = 1/(2*Math.tan(beta_rad));
    let formula = `F/D_{RATIO} = \\frac{1}{2 \\tan\\left(\\beta\\right)}`;
    formula += ` = \\frac{1}{2 \\tan\\left(${beta_deg}°\\right)} = ${fd.toFixed(5)}`
    return (
        <Latex> 
            {`$${formula}$`}
        </Latex>
    );
};

export default Wzor;