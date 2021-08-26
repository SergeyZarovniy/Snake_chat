import React from 'react';
import s from "./../Dialogs.module.css";


const MessageItem = (props) => {
    return (
      <div className={s.userDialog}>
        <p>{props.message}</p>
      </div>
    );
  };

  export default MessageItem;