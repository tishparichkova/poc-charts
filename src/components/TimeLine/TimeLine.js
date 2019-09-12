import React from 'react';
import './TimeLine.scss';

/**
 * Single TimeLine componente, 
 * meant to display the hours from 0 to 23.
 */
const TimeLine = () => {
  const createLine = () => {
    const children = [];

    for (let i = 0; i < 24; i++) {
      children.push(<span key={i} className="single-item">{`${i}:00`}</span>)
    }
  
    return children;
  }

  return (
    <div className="timeline-holder">
      {createLine()}
    </div>
  );
} ;

export { TimeLine };
