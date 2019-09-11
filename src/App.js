import React from 'react';
import './App.css';
import { ChartComponent } from './components/ChartComponent/ChartComponent';
import { TimeLine } from './components/TimeLine/TimeLine';
import { DonutChart } from './components/DonutChart/DonutChart';

function App() {
  const mockedPieChartData = [15, 25, 60];
  const strokeAndFill = [
    {  fill: 'transparent', stroke: '#d2d344', strokeDashOffet: 25 },
    {  fill: 'transparent', stroke: '#ce4b99', strokeDashOffet: 25 - mockedPieChartData[0] },
    {  fill: 'transparent', stroke: "#b1c94e", strokeDashOffet: 25 - mockedPieChartData[0] - mockedPieChartData[1]}
  ];
  let options = [];

  strokeAndFill.reduce((strokeDashOffet, singleSlice, index) => {
    let value = `${mockedPieChartData[index]} ${100 - mockedPieChartData[index]}`

    singleSlice.strokeDashArray = value;
    strokeDashOffet = index === 0 ? 25 : strokeDashOffet - mockedPieChartData[index - 1];
    singleSlice.strokeDashOffet = strokeDashOffet;
    options.push(singleSlice);
    
    return strokeDashOffet;
  }, 25);

  return (
    <div className="App">
      <div className="bar-chart-section">
        <div className="chart-timeline-holder">
          <ChartComponent />
          <TimeLine/>
        </div>
        <div className="chart-timeline-holder">
          <ChartComponent />
          <TimeLine/>
        </div>
        <div className="chart-timeline-holder last">
          <ChartComponent />
          <TimeLine/>
        </div>
      </div>
      <div 
        className="donut-chart-holder">
        <DonutChart options={options} />
      </div>}
    </div>
  );
}

export default App;
