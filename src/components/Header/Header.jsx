import React from "react";
import s from'./Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://media.istockphoto.com/vectors/viper-snake-sport-logo-design-vector-id1255768797?k=6&m=1255768797&s=170667a&w=0&h=Ai5arIpjB0eoF6Wrio42f2zG3OVnHQDHecAnhXpUUwY="></img>
      <div className={s.logoName}>SnakeChat...</div>
    </header>
  );
};

export default Header;
