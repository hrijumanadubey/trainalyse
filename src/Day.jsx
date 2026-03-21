import React from "react";

import { useNavigate } from "react-router-dom";

function Day() {
  const navigate = useNavigate();

  const [date, setDate] = React.useState("");
  const [edit, setEdit] = React.useState(false);
  return (
    <>
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
          onChange={(e) => (setDate(e.target.value), setEdit(false))}
        />
      )}
    </>
  );
}

export default Day;
