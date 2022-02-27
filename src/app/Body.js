import React, { useState } from "react";
import Menu from "./Menu";
import View from "./View";
import Notebox from "./Notebox";
import "../style/Body.css";

function Body() {
  const [showNote, setShowNote] = useState(false);

  const handleNote = () => setShowNote(!showNote);

  return (
    <div className="body">
      <Menu onClickNewNote={handleNote} />
      {showNote ? <Notebox onClose={handleNote} /> : null}
      <View />
    </div>
  );
}

export default Body;
