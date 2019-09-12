import React from 'react';
import './ColumnChart.scss';

const MAX_HEIGHT = 500;

/**
 * Column Chart is basic component which aim is to display as much bar elements
 * as data elements are given.
 * 
 * @param {Array} mockedDate - array of objects: x and y coordinates
 * 
 */
const ColumnChart = ({ data }) => {
  return (
    <div className="chart-holder">
      {data.map((el, index) => {
        let style = {
          height: `${(el.y / MAX_HEIGHT) * 100}%`,
        };

        return (
          <div
            key={index}
            className="bar"
            style={style}
          >
          </div>
        )
      })}
    </div>
  );
} ;

export { ColumnChart };
