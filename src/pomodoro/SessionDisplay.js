import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import {minutesToDuration} from "../utils/duration";
import {secondsToDuration} from "../utils/duration";

function SessionDisplay({session, focusDuration, breakDuration, isTimerRunning}) {
  
//   function secondsToDuration(givenSeconds) {
//     const minutes = Math.floor((givenSeconds % 3600) / 60)
//       .toString()
//       .padStart(2, "0");
//     const seconds = Math.round(givenSeconds % 60)
//       .toString()
//       .padStart(2, "0");
//     return `${minutes}:${seconds}`;
//   }
  
  
    if (session) {
      return (
    <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label} for{" "}
                {session.label === "Focusing"
                  ? minutesToDuration(focusDuration)
                  : minutesToDuration(breakDuration)}{" "}
                minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
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
                  } // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: "0%" }} // TODO: Increase width % as elapsed time increases
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