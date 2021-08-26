import React from "react";
import s from "./Dialogs.module.css";
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

const MessageItem = (props) => {
  return (
    <div className={s.userDialog}>
      <p>{props.message}</p>
    </div>
  );
};

let dialogs = [
  { id: 1, name: "Yana Zarovna" },
  { id: 2, name: "Ivan Skripnik" },
  { id: 3, name: "Yarek Brokh" },
  { id: 4, name: "Volodia Perun" },
];

let messages = [
  { id: 1, message: "Love you,babe" },
  { id: 2, message: "Whats up,bro?" },
  { id: 3, message: "Sho tam po arende???" },
  { id: 4, message: "How is your React lessons going?" },
];

let dialogsElement = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

let messagesElement = messages.map((m) => <MessageItem message={m.message} />);

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.userArea}>{dialogsElement}</div>

      <div className={s.dialogArea}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
