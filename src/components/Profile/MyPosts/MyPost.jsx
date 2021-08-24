import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
  {id:1,post:"Working on new React project"},
  {id:2,post:"How are you,buddy?"},
  {id:3,post:"Now i am traveling"}
]

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <span className={s.postHeader}>My posts...✉</span>
      

      <div className={s.newPost}>
         <input></input>
         <button>Add new post</button>
      </div>

      <Post message = {postsData[0].post}/>
      <Post message = {postsData[1].post}/>
      <Post message = {postsData[2].post}/>
        
    </div>
  );
};

export default MyPosts;
