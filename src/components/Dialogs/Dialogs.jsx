import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
   let patch = "/messages/" + props.id;
  return (
<div className={s.userName}>
          <NavLink className={s.links} to={patch}> {props.name} </NavLink>
        </div>
  )
};

const MessageItem = (props) => {
  return (
<div className={s.userDialog}>
          <p>{props.message}</p>
          </div>
  )
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.userArea}>
        <DialogItem id='1' name="Yana Zarovna"/>
        <DialogItem id='2' name="Ivan Scripnik"/>
        <DialogItem id='3' name="Yarek Brokh"/>
        <DialogItem id='4' name="Volodia Perun"/>
      </div>

      <div className={s.dialogArea}>
        <MessageItem message = "Love you,babe"/>
        <MessageItem message = "Whats up,bro?"/>
        <MessageItem message = "Sho tam po arende???"/>
        <MessageItem message = "How is your React lessons going?"/>
      </div>
    </div>
  );
};

export default Dialogs;
