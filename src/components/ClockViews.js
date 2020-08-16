import React from 'react';
import './App.css';

function Break(props) {
  const defaultBreakTime = 5;


  return (
    <div className="BreakClock">
      <h2>Break</h2>
      <p>{defaultBreakTime}</p>
    </div>
  );
}
function Work(props) {
  const defaultWorkTime = 25;
  return (
      <div className="WorkClock">
        <h2>Work</h2>
        <p>{defaultWorkTime}</p>
      </div>
  );
}
export default Break;
export {Work};
