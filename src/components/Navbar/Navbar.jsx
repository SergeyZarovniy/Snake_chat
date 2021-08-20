import React from "react";
import { NavLink } from "react-router-dom";
import s from'./Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink className={s.navbarLink} to ='/profile' activeClassName={s.active}> My Profile</NavLink>
      </div>

      <div>
        <NavLink className={s.navbarLink} to ='/messages' activeClassName={s.active}> Messages </NavLink>
      </div>

      <div>
      <NavLink className={s.navbarLink} to ='/news' activeClassName={s.active}> News </NavLink>
      </div>

      <div>
      <NavLink className={s.navbarLink} to ='/music' activeClassName={s.active}> Music </NavLink>
      </div>

      <div>
      <NavLink className={s.navbarLink} to ='/settings' activeClassName={s.active}> Settings </NavLink>
      </div>
    </nav>
  );
};

export default Navbar
