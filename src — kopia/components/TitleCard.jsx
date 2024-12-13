import React from 'react';
import './TitleCard.css';


const TitleCard = ({title,paragraf
    ,IsDarkTheme
}) => {

    const darkClass = IsDarkTheme?" _darkTheme":"";
  return (

      <div className="TitleCard">
        <div className={"TitleCard-content"+darkClass}>
          <p className={"TitleCard-title"+darkClass}>{title}</p>
          { (paragraf ) &&
            <p className={"TitleCard-para"+darkClass}>{paragraf}</p>
          }
          
        </div>
      </div>

  );
}

  

export default TitleCard;
