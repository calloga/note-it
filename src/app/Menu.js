import React from "react";
import "../style/Menu.css";
import Option from "./Option.js";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";

function Menu({ onClickNewNote = () => {} }) {
  return (
    <div className="menu">
      <Option
        Icon={NoteAddOutlinedIcon}
        title="New Note"
        onclick={onClickNewNote}
      />
      <Option Icon={SearchOutlinedIcon} title="Find Note" />
      <Option Icon={FactCheckOutlinedIcon} title="Filter Notes" />
      <Option Icon={ExitToAppOutlinedIcon} title="Export Notes" />
      <Option Icon={PublishOutlinedIcon} title="Import Notes" />
    </div>
  );
}

export default Menu;
