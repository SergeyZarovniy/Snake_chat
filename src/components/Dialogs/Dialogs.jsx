import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.userArea}>
        <div className={s.userName}>
          <img
            className={s.userImg}
            src="https://img-ovh-cloud.szafa.pl/ubrania/0/020482822/1411590858.jpg"
          />
          <NavLink className={s.links} to = '/messages/1'>Yana Zarovna</NavLink>
        </div>
        <div className={s.userName}>
          <img
            className={s.userImg}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKthUA_f96Sfnj-fC11kFqKlA--YPfob8WxY7GIfJgPpdKU_DGmE0UY5D7nTM3SoFkkyI&usqp=CAU"
          />
          <NavLink className={s.links} to = '/messages/2'>Ivan Skripnik</NavLink>
        </div>
        <div className={s.userName}>
          <img
            className={s.userImg}
            src="https://sun9-70.userapi.com/impf/c540109/v540109259/22289/eUaPpdHeu0Q.jpg?size=604x403&quality=96&sign=6965237605d00eef96cc664126078877&type=album"
          />
          <NavLink className={s.links} to = '/messages/3'>Yarek Brokh</NavLink>
        </div>
        <div className={s.userName}>
          <img
            className={s.userImg}
            src="https://ocdn.eu/zapytaj/MDA_/24db229eccea5628f8c873ddda60a753.jpg"
          />
          <NavLink className={s.links} to = '/messages/4'>Volodia Perun</NavLink>
        </div>
      </div>
      <div className={s.dialogArea}>
        <div className={s.userDialog}>
          <p> Love you,babe </p>
          </div>
        <div className={s.userDialog}>
          <p>Whats up,bro?</p>
          </div>
        <div className={s.userDialog}>
          <p>Sho tam po arende???</p>
          </div>
        <div className={s.userDialog}>
          <p>How is your React lessons going?</p>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
