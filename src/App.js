import React from 'react';
import './App.css';
import { ChartComponent } from './components/ChartComponent/ChartComponent';
import { TimeLine } from './components/TimeLine/TimeLine';

function App() {
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
    </div>
  );
}

export default App;
