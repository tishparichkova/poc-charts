import React from 'react';
import './ChartComponent.scss';
import { TimeLine } from './../TimeLine/TimeLine';

const mockedDate = [{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120}];
const MAX_RANGE_Y =  100;
const MAX_HEIGHT = 500;

const ChartComponent = () => {
  return (
    <>
      <div className="chart-holder">
        {mockedDate.map((el, index) => {
          let height = `${(el.y / MAX_HEIGHT)*100}%`;

          var divStyle = {
            height,
          };

          return (
            <div key={index} className="bar" style={divStyle}></div>
          )
        })}
      </div>
    </>
  );
} ;

export { ChartComponent };
