import React, { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [btnState, setBtnState] = useState(false);

  const decrementCounterValue = () => {
    setCounterValue(counterValue - 1);
  };

  const incrementCounterValue = () => {
    setCounterValue(counterValue + 1);
  };

  const resetCounterValue = () => {
    setCounterValue(0);
  };

  let shouldDisplayBtn = counterValue !== 0;

  return (
    <div className="App">
      <h1 className="container">Counter: {counterValue}</h1>
      <button className="btn-1" onClick={decrementCounterValue}>
        <h1>-</h1>
      </button>
      {shouldDisplayBtn && (
        <button className="btn-2" onClick={resetCounterValue}>
          Reset
        </button>
      )}
      <button className="btn-3" onClick={incrementCounterValue}>
        <h2>+</h2>
      </button>
    </div>
  );
};

export default Counter;
