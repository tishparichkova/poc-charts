import React from 'react';
import './ChartSection.scss';
import { ColumnChart } from './../ColumnChart/ColumnChart';
import { TimeLine } from './../TimeLine/TimeLine';
import { PieChart } from './../PieChart/PieChart';
import { mockedData } from './../../mockedData';

/**
 * ChartSection holds - column charts and pieCharts components
 *  
 */
const ChartSection = () => {
  return (
    <>
      <div className="chart-section">
        
        <div className="pie-charts-holder">
          <PieChart
            colors={mockedData.pieChartColors}
            data={mockedData.pieElements}
            isWithDots={true}
          />
          <PieChart
            colors={mockedData.pieChartColors}
            data={mockedData.pieElements}
            isWithDots={false}
            legend={mockedData.legend}
          />

          <PieChart
            colors={mockedData.pieChartColors}
            data={mockedData.pieElements}
            isWithDots={true}
          />
    
          <PieChart
            colors={mockedData.pieChartColors}
            data={mockedData.pieElements}
            isWithDots={false}
            legend={mockedData.legend}
          />
        
          <PieChart
            colors={mockedData.pieChartColors}
            data={mockedData.pieElements}
            isWithDots={false}
            legend={mockedData.legend}

          />
        </div>

        <div className="chart-timeline-holder">
          <ColumnChart
            data={mockedData.coordinates} 
          />
          <TimeLine/>
        </div>
      </div>
    </>
  )
};

export { ChartSection };
