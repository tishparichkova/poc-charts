import React, { useEffect, useState } from 'react';
import './DonutChart.scss';

/**
 * Simple DonutChart component,
 * will render the colors, and the percentage passed in the data parameter
 * 
 * @param {Array} colors - array of objects with properties fill and stroke
 * @param {Array} data - array of numbers
 * @param {Boolean} isWithDots - shall three dots be rendered inside the donut chart
 * @param {Array} legend - array
 */
const DonutChart = ({ colors, data, isWithDots, legend }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    let options = [];
    let singleSlice = {};

    colors.reduce((strokeDashOffset, singleSliceItem, index) => {
      singleSlice = Object.assign({}, colors[index]);
      
      singleSlice.strokeDashArray = `${data[index]} ${100 - data[index]}`;

      strokeDashOffset = index === 0 ? 25 : strokeDashOffset - data[index - 1];
      
      singleSlice.strokeDashOffset = strokeDashOffset;

      options.push(singleSlice);

      return strokeDashOffset;
    }, 25)

    setDetails(options);

  }, [colors, data])


  return (
    <div className="donut-chart-holder">
      <div className="donut-chart">
          {isWithDots &&
            <div className="dots-holder">
              <span className="single-dot"></span>
              <span className="single-dot"></span>
              <span className="single-dot"></span>
            </div>
          }
          {details && !!details.length &&
            <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
              {details.map((el, index) => {
                return ( 
                  <circle
                    key={index}
                    className="donut-chart-slice"
                    fill={el.fill}
                    stroke={el.stroke}
                    strokeDasharray={el.strokeDashArray}
                    strokeDashoffset={`${el.strokeDashOffset}`}>
                  </circle>
              )})}
            </svg>
          }
      </div>
      {!!details.length && legend && !!legend.slices.length && 
        <div className="legend">
            <div>
              <b> {legend.hours}h, </b>
              <span> &pound;{legend.pounds} </span>
            </div>
            <div className="legend__information">
              {legend.slices.map((slice, index) => (
                <span key={index}>
                  <span 
                    className="legend__information__color"
                    style={{"backgroundColor": details[index].stroke}}
                  />
                  {slice}
                </span>  
              ))}
            </div>
        </div>
      }
    </div>
  );
};

export { DonutChart };