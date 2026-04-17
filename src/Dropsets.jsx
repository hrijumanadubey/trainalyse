import React from "react";
import { useState } from "react";

function Dropsets({ exerciseType, initialData }) {
  const [weight, setWeight] = useState(initialData?.weight ?? ""); // pre-fill weight if data was passed
  const [reps, setReps] = useState(initialData?.reps ?? ""); // pre-fill reps if data was passed
  const [minutes, setMinutes] = useState(initialData?.minutes ?? ""); // pre-fill minutes if data was passed
  const [seconds, setSeconds] = useState(initialData?.seconds ?? ""); // pre-fill seconds if data was passed

  const id = React.useId();

  return (
    <div>
      {/*this is the logic for the different exercise types */}
      {exerciseType === "weightsAndReps" && (
        <div className="dropset-row">
          <input
            className="dropset-input"
            type="number"
            placeholder="Weight"
            id={id + "-weight"}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            className="dropset-input"
            type="number"
            placeholder="Reps"
            id={id + "-reps"}
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </div>
      )}
      {exerciseType === "duration" && (
        <>
          <div className="dropset-row">
            <input
              className="dropset-input"
              type="range"
              min="0"
              max="100"
              id={id + "-minutes"}
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
            <label>{minutes} : Minutes</label>
          </div>
          <div className="dropset-row">
            <input
              className="dropset-input"
              type="range"
              min="0"
              max="59"
              id={id + "-seconds"}
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
            />
            <label>{seconds} : Seconds</label>
          </div>
        </>
      )}
    </div>
  );
}

export default Dropsets;
