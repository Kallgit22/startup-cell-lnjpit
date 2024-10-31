// CircularProgress.js
import React from 'react';
import './styles/CircularProgress.css';

const CircularProgress = () => {
    const radius = 25; // Radius of the circle
    const strokeWidth = 8; // Width of the stroke
    const normalizedRadius = radius - strokeWidth * 0.5; // Adjusted radius for the stroke
    const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle

    return (
        <svg height={radius * 2} width={radius * 2}>
            <circle
                className="background-ring"
                stroke="#fff" // Background circle color
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                className="progress-ring"
                stroke="blue" // Ring color
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeDasharray={`${circumference * 0.1} ${circumference}`}
                strokeDashoffset={0}
            />
        </svg>
    );
};

export default CircularProgress;
