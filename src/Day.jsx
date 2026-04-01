import React from "react";
import Exercise from "./Exercise";

function Day() {
  const [date, setDate] = React.useState(""); //state for setting date
  const [edit, setEdit] = React.useState(false); //state for editing date
  const [day, setDay] = React.useState(""); //state for naming the day eg.chest day
  const [exerciseArray, setExerciseArray] = React.useState([]);
  const id = React.useId();

  function handleAddExercise() {
    setExerciseArray([
      ...exerciseArray,
      { id: id + "-" + exerciseArray.length },
    ]);
  }

  return (
    <>
      {/*thi section is for displaying the date and edit button,logic is if date
      is entered and edit button is not pressed then the date and day is shown
      but if edit button is pressed then we see the usual input tag for the
      date.*/}
      {date && !edit ? (
        <>
          <p>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      ) : (
        <input
          type="date"
          placeholder="Enter date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setEdit(false);
          }}
        />
      )}
      <br />
      {/*this is a redundant bit where there are 2 input tags for entering
       day and exercise name, in future i can make it a reusable component but for now
      this redundancy exists. */}
      <input
        type="text"
        placeholder="Enter day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <br />
      <Exercise number={1} />
      <br />
      {exerciseArray.map((exercise, index) => (
        <Exercise key={exercise.id} number={index + 2} />
      ))}
      <br />
      <button onClick={handleAddExercise}>+ for Exercises</button>
    </>
  );
}

export default Day;
