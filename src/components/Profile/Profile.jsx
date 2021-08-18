import React from "react";
import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPost';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://www.rentcafe.com/blog/wp-content/uploads/sites/5/2020/06/minimalism-save-money-featured.png"></img>
      </div>
      <div className={s.person}> ava + description 
      </div>
      <MyPosts/>
      
    </div>
  );
};

export default Profile;
