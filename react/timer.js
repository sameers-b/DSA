import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef();

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Progress percentage
  const progress = (time / inputTime) * 100;

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, time]);

  const handleStart = () => {
    setTime(inputTime);
    setIsActive(true);
  };

  const handlePauseResume = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTime(inputTime);
  };

  return (
    <div style={{ width: '300px', margin: '20px' }}>
      <h1>Timer: {formatTime(time)}</h1>
      
      <div style={{ margin: '10px 0' }}>
        <input 
          type="number" 
          value={inputTime} 
          onChange={(e) => setInputTime(Number(e.target.value))} 
          disabled={isActive}
        />
        <span style={{ marginLeft: '5px' }}>seconds</span>
      </div>

      <div style={{ 
        height: '10px', 
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
        margin: '10px 0'
      }}>
        <div 
          style={{ 
            width: `${progress}%`, 
            height: '100%', 
            backgroundColor: progress < 20 ? 'red' : 'green',
            borderRadius: '5px'
          }} 
        />
      </div>

      <div>
        {!isActive ? (
          <button onClick={handleStart} disabled={time === inputTime && isActive}>
            Start
          </button>
        ) : (
          <button onClick={handlePauseResume}>
            {isActive ? 'Pause' : 'Resume'}
          </button>
        )}
        <button onClick={handleReset} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </div>
    </div>
  );
}