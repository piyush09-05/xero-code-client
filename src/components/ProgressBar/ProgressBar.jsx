// ProgressBar.js
import React, { useEffect, useState } from 'react';
import './ProgressBar.css'; // Ensure your CSS file name is updated accordingly

function ProgressBar({ percentage }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="progress-ring" width="200" height="200">
      <circle
        className="progress-ring-circle"
        strokeWidth="10"
        fill="lightblue"
        r={radius}
        cx="50"
        cy="50"
        style={{
          stroke: 'blue', // Change the stroke color here
          strokeDasharray: `${circumference} ${circumference}`,
          strokeDashoffset: offset,
        }}
      />
      <text x="50" y="50" className="progress-text" textAnchor="middle" dy=".3em">
        {`${progress}%`}
      </text>
    </svg>
  );
}

export default ProgressBar;
