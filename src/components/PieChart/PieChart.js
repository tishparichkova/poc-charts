

import React from 'react';
import './PieChart.scss';

/**
 * Simple PieChar component,
 * will render the colors, and the percentage passed in the options parameter
 * 
 * @param {Array} options - list of attributes to be set to the element like: fill, stroke, strokedashArray, and strokedashOffset
 */
const PieChart = ({ options }) => {
  return (
    <>
        {options && options.length &&
          <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
            <circle
              className="donut-hole"
            >  
            </circle>
            {options.map((el, index) => {
              return ( 
                <circle
                  key={index}
                  className="pie-chart-slice"
                  fill={el.fill}
                  stroke={el.stroke}
                  strokeDasharray={el.strokeDashArray}
                  strokeDashoffset={`${el.strokeDashOffet}`}>
                </circle>
            )})}
           </svg>
        }
    </>
  );
};

export { PieChart };