import React from "react";
// import { Link } from "react-router-dom";
import {
  dashboard,
  Avatar,
  transaction,
  statistics,
  card,
  profile,
  settings,
  logout,
} from "../../assets/images.js";
const LeftContainer = () => {
  return (
    <div className="left-container">
      <div className="profile">
        <img className="profile__image" src={Avatar} alt=""></img>

        <p className="profile__name"> Hi, Przemek</p>
      </div>
      <div className="side-bar">
        <div className="menu menu--active">
          <img className="menu__icon" src={dashboard} alt="icon"></img>
          <p className="menu__name">Dashboard</p>
        </div>
        <div className="menu">
          <img className="menu__icon" src={transaction} alt="icon"></img>
          <p className="menu__name">Transaction</p>
        </div>
        <div className="menu">
          <img className="menu__icon" src={statistics} alt="icon"></img>
          <p className="menu__name">Statistics</p>
        </div>
        <div className="menu">
          <img className="menu__icon" src={card} alt="icon"></img>
          <p className="menu__name">Card</p>
        </div>
        <div className="menu">
          <img className="menu__icon" src={profile} alt="icon"></img>
          <p className="menu__name">Profile</p>
        </div>
        <div className="menu">
          <img className="menu__icon" src={settings} alt="icon"></img>
          <p className="menu__name">Settings</p>
        </div>
        <hr className="line"></hr>
        <div className="menu">
          <img className="menu__icon" src={logout} alt="icon"></img>
          <p className="menu__name">Log out</p>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
