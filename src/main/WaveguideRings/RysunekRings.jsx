import  React from "react";

const RysunekRings = ({length,dHorn,ringWidth,ringDepth,ringPos,dBlock,blockPerc,L}) => {
    const fontSize = 4.5;
    return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="27.675 -85.2 201.525 119.302"
  >
    <g transform="scale(1 -1)">
    <path stroke="#000" strokeWidth="0.4" d="M120 0H40" />
    <path stroke="#000" strokeWidth="0.4" d="M120 50H40" />
    <path stroke="red" strokeWidth="0.4" d="M100-20h20" />
    <path stroke="red" strokeWidth="0.4" d="M100-0.3h20" />
    <path stroke="red" strokeWidth="0.4" d="M120 70h-20" />
    <path stroke="red" strokeWidth="0.4" d="M120 50.3h-20" />
    <path stroke="#000" strokeWidth="0.4" d="M120 50h7" />
    <path stroke="#000" strokeWidth="0.4" d="M120 0h7" />
      <path
        stroke="#000"
        strokeWidth="0.2"
        d="M40 0v50M127 0v50"
      ></path>
      <path stroke="red" strokeWidth="0.4" d="M100-20V0M100 50v20" />
      <path stroke="red" strokeWidth="0.2" d="M120 70V50M120-20V0" />

      <path
        stroke="red"
        strokeDasharray="1.905,0.9525"
        strokeDashoffset="0.241"
        strokeWidth="0.3"
        d="M100 50V0M120 50V0"
      ></path>
      <path
        stroke="#0f0"
        strokeDasharray="6,0.75,0,0.75"
        strokeDashoffset="3.75"
        strokeWidth="0.25"
        d="M38 25h91"
      ></path>
      <circle cx="183" cy="25" r="45" stroke="red" strokeWidth="0.4"></circle>
      <circle cx="183" cy="25" r="25" stroke="red" strokeWidth="0.4"></circle>
      <circle cx="183" cy="25" r="24.5" stroke="#000" strokeWidth="0.4"></circle>
      <circle
        cx="183"
        cy="25"
        r="0.5"
        stroke="green"
        strokeWidth="0.4"
      ></circle>
      <text
        fill="maroon"
        dx="-6"
        dy="1.5"
        fontFamily="Standard"
        fontSize={fontSize}
        textAnchor="middle"
        transform="matrix(1 0 0 -1 110 -23.189)"
      >
        Ring_H = {ringDepth} mm
      </text>
      <g stroke="maroon" strokeWidth="0.09">
        <path d="M120-26.73h-20"></path>
        <path
          fill="maroon"
          fillRule="evenodd"
          d="m120-26.73-2.5-.417v.833ZM100-26.73l2.5.416v-.833Z"
        ></path>
        <path d="M120-20.625v-7.355M100-20.625v-7.355"></path>
      </g>
      <path stroke="maroon" strokeWidth="0.09" d="m88 -26.73 12.028.002"></path>
      <text
        fill="#000"
        dx="-15"
        dy="1.5"
        fontFamily="Standard"
        fontSize={fontSize}
        textAnchor="middle"
        transform="matrix(1 0 0 -1 83.5 -27.527)"
      >
       Horn_L = {length} mm
      </text>
      <g stroke="#000" strokeWidth="0.09">
        <path d="M40-30.652h87"></path>
        <path
          fill="#000"
          fillRule="evenodd"
          d="m40-30.652 2.5.416v-.832ZM127-30.652l-2.5-.416v.832Z"
        ></path>
        <path d="M40-.625v-31.277M127-.625v-31.277"></path>
      </g>
      <text
        fill="#000"
        dx="0"
        dy="5.5"
        fontFamily="Standard"
        fontSize={fontSize}
        textAnchor="middle"
        transform="matrix(0 1 1 0 28.875 25)"
      >
        Horn_D = ⌀{dHorn} mm
      </text>
      <g stroke="#000" strokeWidth="0.09" transform="translate(4, 0)">
        <path d="M32 50V0"></path>
        <path
          fill="#000"
          fillRule="evenodd"
          d="m32 50 .416-2.5h-.832ZM32 0l-.416 2.5h.832Z"
        ></path>
        <path d="M69.375 50H30.75M69.375 0H30.75"></path>
      </g>
      <text
        fill="#000"
        dx="8"
        dy="2.5"
        fontFamily="Standard"
        fontSize={fontSize}
        textAnchor="middle"
        transform="matrix(1 0 0 -1 131.013 67.024)"
      >
        Ring_Pos = {ringPos} mm
      </text>
      <g stroke="#000" strokeWidth="0.09">
        <path d="M132 61.636h-17"></path>
        <path
          fill="#000"
          fillRule="evenodd"
          d="m127 61.636 2.5.416v-.833ZM120 61.636l-2.5-.417v.833Z"
        ></path>
        <path d="M127 50.625v12.261M120 69.375v-8.989"></path>
      </g>
      <path stroke="#000" strokeWidth="0.09" d="m132 61.636 20.028.002"></path>
      <text
        fill="maroon"
        dx="7.5"
        dy="2"
        fontFamily="Standard"
        fontSize={fontSize}
        textAnchor="middle"
        transform="matrix(0 1 1 0 89.984 60)"
      >
        Ring_W = {ringWidth} mm
      </text>
      <g stroke="maroon" strokeWidth="0.09">
        <path d="M93.526 84V50"></path>
        <path
          fill="maroon"
          fillRule="evenodd"
          d="m93.526 70 .416-2.5h-.832ZM93.526 50l-.416 2.5h.832Z"
        ></path>
        <path d="M99.375 70h-7.099M99.375 50h-7.099"></path>
      </g>
      <text
        fill="maroon"
        dx="0"
        dy="1.5"
        fontFamily="Standard"
        fontSize={fontSize}
        textAnchor="middle"
        transform="matrix(1 0 0 -1 183 28.125)"
      >
        Ring_D = ⌀{dBlock} mm
      </text>
      <g stroke="maroon" strokeWidth="0.09">
        <path d="M138 25h90"></path>
        <path
          fill="maroon"
          fillRule="evenodd"
          d="m138 25 2.5.416v-.832ZM228 25l-2.5-.416v.832Z"
        ></path>
        
      </g>
      <text
        fill="#000"
        dx="0"
        dy="0"
        fontFamily="Standard"
        fontWeight="bolder"
        fontSize={7.5}
        transform="matrix(1 0 0 -1 37.915 65.694)"
      >
        λ = {L} mm
      </text>
      <text
        fill="#000"
        dx="119"
        dy="94"
        fontFamily="Standard"
        fontWeight="bolder"
        fontSize={7.5}
        transform="matrix(1 0 0 -1 37.915 65.694)"
      >
        Blockage = {blockPerc} %
      </text>
    </g>
  </svg>
);
}

export default RysunekRings;
