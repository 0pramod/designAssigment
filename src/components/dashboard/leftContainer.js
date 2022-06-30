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
          <a href=" " className="menu__name">
            Dashboard
          </a>
        </div>
        <div className="menu">
          <img className="menu__icon" src={transaction} alt="icon"></img>
          <a href=" #" className="menu__name">
            Transaction
          </a>
        </div>
        <div className="menu">
          <img className="menu__icon" src={statistics} alt="icon"></img>
          <a href=" #" className="menu__name">
            Statistics
          </a>
        </div>
        <div className="menu">
          <img className="menu__icon" src={card} alt="icon"></img>
          <a href=" #" className="menu__name">
            Card
          </a>
        </div>
        <div className="menu">
          <img className="menu__icon" src={profile} alt="icon"></img>
          <a href=" #" className="menu__name">
            Profile
          </a>
        </div>
        <div className="menu">
          <img className="menu__icon" src={settings} alt="icon"></img>
          <a href=" #" className="menu__name">
            Settings
          </a>
        </div>
        <hr className="line"></hr>
        <div className="menu">
          <img className="menu__icon" src={logout} alt="icon"></img>
          <a href=" #" className="menu__name">
            Log out
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
