import React from "react";
import "../style/Note.css";
function Note({ message, date }) {
  return (
    <div className="note">
      <div className="notePreview">
        <p>{message}</p>
      </div>

      {/*<div className="noteDate">
        <p>{date}</p>
  </div>*/}
    </div>
  );
}

export default Note;
