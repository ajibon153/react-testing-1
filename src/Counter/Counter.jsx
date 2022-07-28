import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [CounterValue, setCounterValue] = useState(0);
  const [InputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(CounterValue + InputValue);
  };

  const minToCounter = () => {
    setCounterValue(CounterValue - InputValue);
  };

  return (
    <div>
      <h3 data-testid='header'>My Counter</h3>
      <h2
        data-testid='counter'
        className={
          CounterValue >= 100 ? 'green' : CounterValue <= -100 ? 'red' : ''
        }
      >
        {CounterValue}
      </h2>
      <button data-testid='add-btn' onClick={addToCounter}>
        +
      </button>
      <input
        data-testid='input'
        type='number'
        value={InputValue}
        style={{ textAlign: 'center' }}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button data-testid='min-btn' onClick={minToCounter}>
        -
      </button>
    </div>
  );
}

export default Counter;
