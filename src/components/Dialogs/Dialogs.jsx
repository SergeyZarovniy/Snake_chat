import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import MessageItem from '../Dialogs/MessageItem/MessageItem';


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
