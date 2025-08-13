import './Clock.css';
import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  const [timerRunning, setTimerRunning] = useState(true);
  useEffect(() => {
    if (!timerRunning) {
      return;
    }
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [timerRunning]);

  return (
    <>
      <div className="timer-container">
        RealTime Clock
        <div className={timerRunning ? 'clock' : 'stop-clock'}>{time.toLocaleTimeString('it-IT')}</div>
        <button
          className={timerRunning ? 'timer' : 'stop-timer'}
          onClick={() => {
            setTimerRunning(!timerRunning);
          }}
        >
          {timerRunning ? '타이머 중지' : '타이머 시작'}
        </button>
      </div>
    </>
  );
}

export default Clock;
