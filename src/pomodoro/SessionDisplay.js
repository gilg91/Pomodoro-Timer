import React from "react";
import {minutesToDuration} from "../utils/duration";
import {secondsToDuration} from "../utils/duration";

function SessionDisplay({session, focusDuration, breakDuration, isTimerRunning}) {
  
    if (session) {
      return (
    <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session.label} for{" "}
                {session.label === "Focusing"
                  ? minutesToDuration(focusDuration)
                  : minutesToDuration(breakDuration)}{" "}
                minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {session && secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={
                    100 -
                    (session.timeRemaining /
                      (session.label === "Focusing"
                        ? focusDuration * 60
                        : breakDuration * 60)) *
                      100
                  }
                  style={{
                    width: `${
                      100 -
                      (session.timeRemaining /
                        (session.label === "Focusing"
                          ? focusDuration * 60
                          : breakDuration * 60)) *
                        100
                    }%`,
                  }}
              />
            </div>
          </div>
        </div>
      </div>
  )

    } else {
      return null;
    }

  
  }

export default SessionDisplay;