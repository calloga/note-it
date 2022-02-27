import React from "react";
import "../style/Option.css";

function Option({ Icon, title, onclick = () => {} }) {
  return (
    <div className="option" onClick={onclick}>
      {Icon && <Icon className="option__icon" />}
      <h3 className="option__title">{title}</h3>
    </div>
  );
}

export default Option;
