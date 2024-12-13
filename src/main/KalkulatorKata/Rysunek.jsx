import React from 'react';

const Rysunek = ({SliderW,SliderH,angle_deg}) => {
  
  const obrys = "M50 30 h50 M50 30 v20 M100 30 v20";

    return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="49 -54 64.25 42.25"
  >
    <g transform="scale(1 -1)">
      <path
        stroke="#000"
        strokeWidth="0.25"
        d={obrys}
      ></path>
      <path
        stroke="#0f0"
        strokeDasharray="6,0.75,0,0.75"
        strokeDashoffset="3"
        strokeWidth="0.25"
        d="M75 53V23"
      ></path>
      <text
        fill="#000"
        dx="0"
        dy="2.5"
        fontFamily="Standard"
        fontSize="3.5"
        textAnchor="middle"
        transform="matrix(0 1 1 0 107.875 40)"
      >
        H = {SliderH}
      </text>
      <g stroke="#000" strokeWidth="0.09">
        <path d="M100.625 50h11.625M100.625 30h11.625M111 50V30"></path>
        <path
          fill="#000"
          fillRule="evenodd"
          d="m111 50 .416-2.5h-.832ZM111 30l-.416 2.5h.832Z"
        ></path>
      </g>
      <text
        fill="#000"
        dx="0"
        dy="2.5"
        fontFamily="Standard"
        fontSize="3.5"
        textAnchor="middle"
        transform="matrix(1 0 0 -1 75 17.125)"
      >
        D = ⌀{SliderW}
      </text>
      <g stroke="#000" strokeWidth="0.09">
        <path d="M100 29.375V12.75M50 29.375V12.75M100 14H50"></path>
        <path
          fill="#000"
          fillRule="evenodd"
          d="m100 14-2.5-.416v.832ZM50 14l2.5.416v-.832Z"
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
    </g>
  </svg>

    );
};

export default Rysunek;