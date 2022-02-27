import React, { useEffect, useState } from "react";
import Note from "./Note.js";
import "../style/View.css";
import { db } from "./firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function View() {
  const [notes, setNotes] = useState([]);
  const noteCollectionRef = collection(db, "notes");

  useEffect(() => {
    const q = query(noteCollectionRef, orderBy("Date", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    console.log(notes);
    return unsub;
  }, []);

  return (
    <div className="view">
      {notes.map(({ id, data: { message } }) => (
        <Note key={id} message={message} />
      ))}
    </div>
  );
}

export default View;
