import React from 'react';
import './App.css';
import { ChartSection } from './components/ChartSection/ChartSection';

function App() {
  
  return (
    <div className="App">
      <div className="charts-section">
        <ChartSection />
        <ChartSection />
        <ChartSection />
      </div>
    </div>
  );
}

export default App;
