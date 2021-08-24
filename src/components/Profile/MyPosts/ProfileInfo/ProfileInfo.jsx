import React from "react";
import s from '../ProfileInfo/ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.rentcafe.com/blog/wp-content/uploads/sites/5/2020/06/minimalism-save-money-featured.png"></img>
      </div>
       <div className={s.person}> ava + description </div>
    </div>
  );
};

export default ProfileInfo;
