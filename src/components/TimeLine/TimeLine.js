import React from 'react';
import './TimeLine.scss';

const hours = ['00:00',]

const TimeLine = () => {
  const createLine = () => {
    let children = [];

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
