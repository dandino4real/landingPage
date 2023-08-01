import React from "react";
import css from "./Client.module.css";
import user from "../../assets/user.svg";
import location from "../../assets/location.svg";
import server from "../../assets/Server.svg";

const Client = () => {
  return (
    <div className={css.clientContainer}>
      <div className={css.users}>
        <img className={css.img} src={user} alt="users" border="0" />
        <div className={css.text}>
          <h3>90+</h3>
          <p>Users</p>
        </div>
      </div>
      <div className={css.users}>
        <img className={css.img} src={location} alt="users" border="0" />
        <div className={css.text}>
          <h3>30+</h3>
          <p>Locations</p>
        </div>
      </div>
      <div className={css.users}>
        <img className={css.img} src={server} alt="users" border="0" />
        <div className={css.text}>
          <h3>50+</h3>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
};

export default Client;
