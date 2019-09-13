import React, { useEffect, useState } from 'react';
import './PieChart.scss';

/**
 * Simple PieChar component,
 * will render the colors, and the percentage passed in the options parameter
 * 
 * @param {Array} options - list of attributes to be set to the element like: fill, stroke, strokedashArray, and strokedashOffset
 */
const PieChart = ({ colors, data, isWithDots, legend }) => {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    let options = [];
    let strokeDashOffset = 25;
    let singleSlice = {};

    for (let counter = 0; counter < colors.length; counter++) {
      singleSlice = Object.assign({}, colors[counter]);

      singleSlice.strokeDashArray = `${data[counter]} ${100 - data[counter]}`;

      strokeDashOffset = counter === 0 ? 25 : strokeDashOffset - data[counter - 1];
  
      singleSlice.strokeDashOffset = strokeDashOffset;

      options.push(singleSlice);
    }

    setDetails(options);

  }, [colors, data])


  return (
    <div className="pie-chart-holder">
      <div className="pie-chart">
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
                    className="pie-chart-slice"
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

export { PieChart };