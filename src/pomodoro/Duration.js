import React from "react";

function Duration({focusDuration, breakDuration, setFocusDuration, setBreakDuration, session}) {
  
  const handleDecreaseFocus = () => {
    setFocusDuration((current) => {
      if (current <= 5) {
        return 5;
      } else {
        return current - 5;
      }
    });
  };

  const handleIncreaseFocus = () => {
    setFocusDuration((current) => {
      if (current >= 55) {
        return 60;
      } else {
        return current + 5;
      }
    });
  };

  const handleDecreaseBreak = () => {
    setBreakDuration((current) => {
      if (current <= 1) {
        return 1;
      } else {
        return current - 1;
      }
    });
  };

  const handleIncreaseBreak = () => {
    setBreakDuration((current) => {
      if (current >= 14) {
        return 15;
      } else {
        return current + 1;
      }
    });
  };
  
  return (
    <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {("0" + focusDuration).substr(-2)}:00
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick = {handleDecreaseFocus}
                disabled={session?.timeRemaining ? true : false}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick = {handleIncreaseFocus}
                disabled={session?.timeRemaining ? true : false}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {("0" + breakDuration).substr(-2)}:00
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick = {handleDecreaseBreak}
                  disabled={session?.timeRemaining ? true : false}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick = {handleIncreaseBreak}
                  disabled={session?.timeRemaining ? true : false}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
  
  
}

export default Duration;