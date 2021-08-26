import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let patch = "/messages/" + props.id;
  return (
    <div className={s.userName}>
      <NavLink className={s.links} to={patch}>
        {" "}
        {props.name}{" "}
      </NavLink>
    </div>
  );
};

export default DialogItem;
