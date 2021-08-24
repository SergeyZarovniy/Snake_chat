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

let dialogData = [
  {id:1, name: 'Yana Zarovna'},
  {id:2, name: 'Ivan Skripnik'},
  {id:3, name: 'Yarek Brokh'},
  {id:4, name: 'Volodia Perun'}
];

let messageData = [
  {id:1, message: 'Love you,babe'},
  {id:2, message: 'Whats up,bro?'},
  {id:3, message: 'Sho tam po arende???'},
  {id:4, message: 'How is your React lessons going?'}
];

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.userArea}>
        <DialogItem name = {dialogData[0].name} id = {dialogData[0].id}/>
        <DialogItem name = {dialogData[1].name} id = {dialogData[1].id}/>
        <DialogItem name = {dialogData[2].name} id = {dialogData[2].id}/>
        <DialogItem name = {dialogData[3].name} id = {dialogData[3].id}/>
      </div>

      <div className={s.dialogArea}>
        <MessageItem message = {messageData[0].message}/>
        <MessageItem message = {messageData[1].message}/>
        <MessageItem message = {messageData[2].message}/>
        <MessageItem message = {messageData[3].message}/>
      </div>
    </div>
  );
};

export default Dialogs;
