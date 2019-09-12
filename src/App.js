import React from 'react';
import './App.css';
import { ColumnChart } from './components/ColumnChart/ColumnChart';
import { TimeLine } from './components/TimeLine/TimeLine';
import { PieChart } from './components/PieChart/PieChart';
import { pieChartHelper } from './helpers/pieChartHelper';

function App() {
  const pieChartColors = [
    {  fill: 'transparent', stroke: '#44beba', },
    {  fill: 'transparent', stroke: '#7d68a5', },
    {  fill: 'transparent', stroke: '#f56b5d', }
  ];
  const mockedDate = [{ "x": 0, "y": 200 },{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120},{"x":3,"y":320},{"x":0,"y":200},{"x":0.5,"y":220},{"x":1,"y":300},{"x":1.5,"y":400},{"x":2,"y":250},{"x":2.5,"y":120}];

  return (
    <div className="App">
      <div className="bar-chart-section">
        <div className="chart-timeline-holder">
          <ColumnChart
            data={mockedDate} 
          />
          <TimeLine/>
        </div>
        <div className="chart-timeline-holder">
           <ColumnChart
            data={mockedDate} 
          />
          <TimeLine/>
        </div>
        <div className="chart-timeline-holder last">
           <ColumnChart
            data={mockedDate} 
          />
          <TimeLine/>
        </div>
      </div>
      <div 
        className="donut-chart-holder">
        <PieChart options={pieChartHelper(pieChartColors).buildAttributes(55, 10, 35)} />
      </div>
    </div>
  );
}

export default App;
