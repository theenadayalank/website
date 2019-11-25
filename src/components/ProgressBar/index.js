import React from 'react';

const ProgressBar = (props) => {
  let progressBarStyle = {
    width: props.width
  };
  return (
    <div className="progress-container">
      <span className="progress-bar" style={progressBarStyle}></span>
    </div>
  );
}

export default ProgressBar;