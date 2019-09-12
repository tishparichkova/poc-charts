import React from 'react';
import './App.css';
import { ChartComponent } from './components/ChartComponent/ChartComponent';
import { TimeLine } from './components/TimeLine/TimeLine';
import { DonutChart } from './components/DonutChart/DonutChart';
import { pieChartHelper } from './helpers/pieChartHelper';

function App() {
  console.log(pieChartHelper);

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
        <DonutChart options={pieChartHelper.buildAttributes(15, 25, 60)} />
      </div>
    </div>
  );
}

export default App;
