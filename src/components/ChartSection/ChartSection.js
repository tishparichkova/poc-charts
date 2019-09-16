import React from 'react';
import './ChartSection.scss';
import { ColumnChart } from './../ColumnChart/ColumnChart';
import { TimeLine } from './../TimeLine/TimeLine';
import { DonutChart } from '../DonutChart/DonutChart';
import { mockedData } from './../../mockedData';

/**
 * ChartSection holds - column charts and DonutChart components
 *  
 */
const ChartSection = () => {
  return (
    <>
      <div className="chart-section">
        
        <div className="donut-charts-holder">
          <DonutChart
            colors={mockedData.donutChartColors}
            data={mockedData.donutElements}
            isWithDots={true}
          />
          <DonutChart
            colors={mockedData.donutChartColors}
            data={mockedData.donutElements}
            isWithDots={false}
            legend={mockedData.legend}
          />

          <DonutChart
            colors={mockedData.donutChartColors}
            data={mockedData.donutElements}
            isWithDots={true}
          />
    
          <DonutChart
            colors={mockedData.donutChartColors}
            data={mockedData.donutElements}
            isWithDots={false}
            legend={mockedData.legend}
          />
        
          <DonutChart
            colors={mockedData.donutChartColors}
            data={mockedData.donutElements}
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
