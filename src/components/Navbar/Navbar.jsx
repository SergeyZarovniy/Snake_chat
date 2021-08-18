import React from "react";
import { NavLink } from "react-router-dom";
import s from'./Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to ='/profile' activeClassName={s.active}> My Profile</NavLink>
      </div>

      <div>
        <NavLink to ='/messages' activeClassName={s.active}> Messages </NavLink>
      </div>

      <div>
        <a href='/news'> News </a>
      </div>

      <div>
        <a href='/music'> Music </a>
      </div>

      <div>
        <a href='/settings'> Settings </a>
      </div>
    </nav>
  );
};

export default Navbar
