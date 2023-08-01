import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/Logo.svg";

const Header = () => {

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={css.right}>
        <ul className={css.menu}>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </ul>
      </div>

      <div className={css.end}>
        <span className={css.signin}>Sign in</span>
        <span className={css.signup}>Sign up</span>
      </div>
    </div>
  );
};

export default Header;
