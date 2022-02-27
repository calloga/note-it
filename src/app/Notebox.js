import React, { useState } from "react";
import "../style/Notebox.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Notebox({ onClose = () => {} }) {
  const [input, setInput] = useState("");
  const noteCollectionRef = collection(db, "notes");

  const handleSubmit = async (e) => {
    if (!input || !input.trim()) return;
    await addDoc(noteCollectionRef, {
      message: input,
      Date: serverTimestamp(),
    });

    onClose();
  };
  return (
    <div className="notebox" id="notebox">
      <label htmlFor="notebox" className="closeButton" onClick={onClose}>
        <CloseOutlinedIcon className="closeButton_icon" />
      </label>

      <textarea
        className="noteInput"
        placeholder="Speak your mind"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button htmlFor="noteInput" className="saveButton" onClick={handleSubmit}>
        Save note
      </button>
    </div>
  );
}

export default Notebox;
