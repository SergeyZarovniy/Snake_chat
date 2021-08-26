import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let posts = [
  {id:1,post:"Working on new React project"},
  {id:2,post:"How are you,buddy?"},
  {id:3,post:"Now i am traveling"}
]

let postElement = posts.map 
(p => <Post message = {p.post}/>)

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <span className={s.postHeader}>My posts...✉</span>
      

      <div className={s.newPost}>
         <input></input>
         <button>Add new post</button>
      </div>

      {postElement}
        
    </div>
  );
};

export default MyPosts;
