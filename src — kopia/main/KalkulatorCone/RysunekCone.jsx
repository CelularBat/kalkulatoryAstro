import * as React from "react";
const RysunekCone = ({SliderD1,SliderH,angle_deg,d2}) => {
    
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
    height="100%"
    fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="49 -58.563 58.25 41.813"
      >
        <g transform="scale(1 -1)">
          <path
            stroke="#000"
            strokeWidth="0.25"
            d="M60 30h30M60 30 50 50M90 30l10 20"
          ></path>
          <path
            stroke="#0f0"
            strokeDasharray="6,0.75,0,0.75"
            strokeDashoffset="0.25"
            strokeWidth="0.25"
            d="M75 53V25"
          ></path>
          <text
            fill="#000"
            dx="0"
            dy="2.5"
            fontFamily="Standard"
            fontSize="3.5"
            textAnchor="middle"
            transform="matrix(1 0 0 -1 75 57.563)"
          >
            D2 = ⌀{d2}
          </text>
          <g stroke="#000" strokeWidth="0.09">
            <path d="M50 50.625v5.063M100 50.625v5.063M50 54.438h50"></path>
            <path
              fill="#000"
              fillRule="evenodd"
              d="m50 54.438 2.5.416v-.833ZM100 54.438l-2.5-.417v.833Z"
            ></path>
          </g>
          <text
            fill="#000"
            dx="0"
            dy="2.5"
            fontFamily="Standard"
            fontSize="3.5"
            textAnchor="middle"
            transform="matrix(1 0 0 -1 75 22.125)"
          >
            D1 = ⌀{SliderD1}
          </text>
          <g stroke="#000" strokeWidth="0.09">
            <path d="M90 29.375V17.75M60 29.375V17.75M90 19H60"></path>
            <path
              fill="#000"
              fillRule="evenodd"
              d="m90 19-2.5-.416v.832ZM60 19l2.5.416v-.832Z"
            ></path>
          </g>
          <text
            fill="#000"
            dx="0"
            dy="2.5"
            fontFamily="Standard"
            fontSize="3.5"
            textAnchor="middle"
            transform="scale(1 -1)rotate(25.67 147.95 159.756)"
          >
            β={angle_deg}°
          </text>
          <g stroke="#000" strokeWidth="0.09">
            <path d="M75 52.375v-6.42M99.512 49.61l-12.053-9.643M75 47.205a17.2 17.2 0 0 0 13.435-6.457"></path>
            <path
              fill="#000"
              fillRule="evenodd"
              d="m75 47.205 2.524.233-.06-.83ZM88.435 40.748l-2.005 1.55.61.566Z"
            ></path>
          </g>
          <ellipse
            stroke="#000"
            strokeWidth="0.9"
            rx="11"
            ry="2"
            transform="translate(75 38)"
          ></ellipse>
          <path stroke="#000" strokeWidth="0.9" d="M85.637 38.51V30"></path>
          <path
            stroke="red"
            strokeWidth="0.25"
            d="M100 50 75 30M75 30 50 50"
          ></path>
          
          <text
            fill="#000"
            dx="0"
            dy="2.5"
            fontFamily="Standard"
            fontSize="3.5"
            textAnchor="middle"
            transform="matrix(0 1 1 0 101.875 40)"
          >
            H = {SliderH}
          </text>
          <g stroke="#000" strokeWidth="0.09">
            <path d="M105 50V30"></path>
            <path
              fill="#000"
              fillRule="evenodd"
              d="m105 50 .416-2.5h-.832ZM105 30l-.416 2.5h.832Z"
            ></path>
            <path d="M100.625 50h5.625M90.625 30h15.625"></path>
          </g>
        </g>
      </svg>
)}
export default RysunekCone;
