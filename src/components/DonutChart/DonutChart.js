import React from 'react';
import './DonutChart.scss';

const DonutChart = ({ options }) => {
  return (
    <>
        {options && options.length &&
          <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
            <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
            {options.map((el, index) => {
              return ( 
                <circle 
                  className="pie-chart-slice"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  key={index}
                  fill={el.fill}
                  stroke={el.stroke}
                  strokeWidth="5"
                  strokeDasharray={el.strokeDashArray}
                  strokeDashoffset={`${el.strokeDashOffet}`}>
                </circle>
            )})}
           </svg>
        }
    </>
  );
};

export { DonutChart };