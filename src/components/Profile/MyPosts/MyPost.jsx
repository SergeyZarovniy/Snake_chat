import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <span className={s.postHeader}>My posts...</span>

      <div className={s.newPost}>
         <input></input>
         <button>Add new post</button>
      </div>

      <Post message = "Working on new React project"/>
      <Post message = "How are you,buddy?"/>
      <Post message = "Now i am traveling"/>
        
    </div>
  );
};

export default MyPosts;
