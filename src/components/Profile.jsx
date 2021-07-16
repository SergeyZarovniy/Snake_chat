import React from "react";
import s from'./Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://www.rentcafe.com/blog/wp-content/uploads/sites/5/2020/06/minimalism-save-money-featured.png"></img>
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
      </div>
      <div>post 1</div>
      <div>post 2</div>
    </div>
  );
};

export default Profile;
