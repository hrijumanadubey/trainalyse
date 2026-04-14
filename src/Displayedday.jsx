import React from "react";

function Displayedday({ date, title }) {
  return (
    <ul className="displayedday">
      <div>
        {date} - {title}
      </div>
    </ul>
  );
}

export default Displayedday;
