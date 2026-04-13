import React from "react";
import Dropsets from "./Dropsets";
import { useState } from "react";

function Sets({ num, exerciseType }) {
  const [dropSets, setDropSets] = useState([]); //state of array for storing drop sets
  const id = React.useId();

  // function to handle adding a new drop set
  function handleDropSets() {
    const updatedDropSets = [...dropSets, { id: id + "-" + dropSets.length }];
    setDropSets(updatedDropSets);
  }

  // function to handle removing a drop set
  function handleMinus() {
    if (dropSets.length > 0) {
      const updatedDropSets = dropSets.slice(0, -1);
      setDropSets(updatedDropSets);
    }
  }

  return (
    <>
      <p>Set {num}:</p>

      <br />
      {/* this is the drop set part rendered which will be shown initially on the first render */}
      <Dropsets exerciseType={exerciseType} />
      {/*this is the part where dropsets are rendered by mapping to the dropsets array */}
      {dropSets.map((set) => (
        <Dropsets key={set.id} exerciseType={exerciseType} />
      ))}
      <br />
      {/* this is the button to add a new drop set */}
      <button onClick={handleDropSets}>+ for drop sets</button>
      {/* this is the button to remove a drop set, only shown if there are drop sets */}
      {dropSets.length > 0 && (
        <button onClick={handleMinus}>- for drop sets</button>
      )}
    </>
  );
}

export default Sets;
