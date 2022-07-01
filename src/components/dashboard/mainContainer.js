import React from "react";
// import { Link } from "react-router-dom";
import {
  PurpleCard,
  BlueCard,
  flower,
  gopro,
  pg,
  nasa,
  md,
  AddCard,
  graph,
  search,
  inbox,
  notification,
} from "../../assets/images.js";
const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="container ">
        <p className="title"> Your Dashboard</p>
        <div className="lists">
          <div className="search">
            <img className="search__icon" src={search} alt=""></img>
            <p> Search</p>
          </div>
          <div className="card ">
            <img className="card__icon" src={inbox} alt=""></img>
            <img src={notification} alt=""></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card card--shadow">
          <img src={PurpleCard} alt=""></img>
        </div>
        <div className="card card--shadow">
          {" "}
          <img src={BlueCard} alt=""></img>
        </div>
        <div className="card">
          <img src={AddCard} alt=""></img>
        </div>
      </div>
      <div className="container">
        <div className="card ">
          <p className="title title--m ">Transaction</p>
          <div className="lists lists--gap">
            <div className="lists__title">
              <img className="lists__title__image" src={flower} alt=""></img>
              <div className="lists__title__description">
                <a href=" #" className="lists__title__description__name">
                  {" "}
                  Belle Incentive
                </a>
                <p className="lists__title__description__date">12 Jan, 2022</p>
              </div>
            </div>
            <div className="lists__price">+ ¥690.00</div>
          </div>
          <div className="lists lists--gap">
            <div className="lists__title">
              <img className="lists__title__image" src={gopro} alt=""></img>
              <div className="lists__title__description">
                <a href=" #" className="lists__title__description__name">
                  {" "}
                  GoPro
                </a>
                <p className="lists__title__description__date">13 Jan, 2022</p>
              </div>
            </div>
            <div className="lists__price">- ¥78900.00</div>
          </div>
          <div className="lists lists--gap">
            <div className="lists__title">
              <img className="lists__title__image" src={pg} alt=""></img>
              <div className="lists__title__description">
                <a href=" #" className="lists__title__description__name">
                  {" "}
                  P&G Rewards
                </a>
                <p className="lists__title__description__date">21 Feb, 2022</p>
              </div>
            </div>
            <div className="lists__price">+ ¥4500.00</div>
          </div>
          <div className="lists lists--gap">
            <div className="lists__title">
              <img className="lists__title__image" src={nasa} alt=""></img>
              <div className="lists__title__description">
                <a href=" #" className="lists__title__description__name">
                  {" "}
                  Nasa
                </a>
                <p className="lists__title__description__date">23 Mar, 2022</p>
              </div>
            </div>
            <div className="lists__price">- ¥560.00</div>
          </div>
          <div className="lists lists--gap">
            <div className="lists__title">
              <img className="lists__title__image" src={md} alt=""></img>
              <div className="lists__title__description">
                <a href=" #" className="lists__title__description__name">
                  {" "}
                  Macdonald Cashback
                </a>
                <p className="lists__title__description__date">30 May, 2022</p>
              </div>
            </div>
            <div className="lists__price">+ ¥234.00</div>
          </div>
        </div>
        <div className="card card--image">
          <div className="lists lists--no-padding">
            <p className="title title--m">Activity</p>
            <form className="form-contains form-contains--date">
              <select name="date">
                <option value="">2021</option>
                <option value="">2022</option>
              </select>
            </form>
          </div>
          <div className="lists">
            <img className="card__image" src={graph} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
