import React from "react";
// import { Link } from "react-router-dom";
import {
  Avatar2,
  balance,
  chart,
  creditCard,
  statistics,
  lines,
  up,
  donut,
} from "../../assets/images.js";
const RightContainer = () => {
  return (
    <div className="right-container">
      <div className="card">
        <div className="lists">
          <p className="title">Account</p>
        </div>
        <div className="card card--blue">
          <div className="lists lists--no-padding">
            <p>Balance</p>
            <img src={lines} alt=""></img>
          </div>
          <div className="lists lists--no-padding">
            <p className="lists__title--bg">¥ 109.00</p>
            <div className="lists lists--small">
              <img src={up} alt=""></img>
              <p>4.5%</p>
            </div>
          </div>
          <div className="lists"></div>
        </div>
      </div>
      <div className="card">
        <div className="lists">
          <p className="title">All Expenses</p>
          <form className="form-contains form-contains--time">
            <select name="Time">
              <option value="">Monthly</option>
              <option value="">Yearly</option>
            </select>
          </form>
        </div>

        <div className="card card--bg-white">
          <div className="lists ">
            <div className="lists__title">
              <div className="lists__title__description">
                <p className="lists__title__description__date">Daily</p>
                <p className="lists__title__description__name lists__title__description__name--bg ">
                  {" "}
                  ¥ 450.00
                </p>
              </div>
            </div>
            <div className="lists__title">
              <div className="lists__title__description">
                <p className="lists__title__description__date">Weekly</p>
                <p className="lists__title__description__name lists__title__description__name--bg">
                  {" "}
                  ¥ 879.00
                </p>
              </div>
            </div>
            <div className="lists__title">
              <div className="lists__title__description">
                <p className="lists__title__description__date">¥ Monthly</p>
                <p className="lists__title__description__name lists__title__description__name--bg">
                  {" "}
                  ¥ 234.00
                </p>
              </div>
            </div>
          </div>

          <div className="lists">
            <img className="lists__image" src={donut} alt=""></img>
          </div>
          <div className="lists lists--no-padding">
            <div className="lists lists--no-padding">
              <div className="dot dot--yellow"></div>
              <p className="text-small"> Shopping</p>
            </div>
            <div className="lists lists--no-padding">
              <div className="dot dot--orange"></div>
              <p className="text-small"> Workspace</p>
            </div>
            <div className="lists lists--no-padding">
              <div className="dot dot--purple"></div>
              <p className="text-small"> Platform</p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="lists">
          <p className="title">Send Money</p>
          <form> </form>
        </div>
        <div className="card card--bg-white">
          <div className="lists ">
            <div className="lists__title">
              <img className="lists__title__image" src={Avatar2} alt=""></img>
              <div className="lists__title__description">
                <p className="lists__title__description__name">
                  {" "}
                  Belle Incentive
                </p>
                <p className="lists__title__description__date">12, Jan, 2022</p>
              </div>
            </div>
            <a href=" " className="lists__blue">
              change
            </a>
          </div>
          <div className="lists lists--bg-gray">
            <div className="lists__title">
              <img
                className="lists__title__image"
                src={creditCard}
                alt=""
              ></img>
              <div className="lists__title__description">
                <p className="lists__title__description__name"> Credit</p>
              </div>
            </div>
            <form className="form-contains form-contains--money">
              <select name="money">
                <option value="">¥890.00</option>
                <option value="">¥890.00</option>
              </select>
            </form>
          </div>

          <div className="lists lists--bg-gray">
            <div className="lists__title">
              <div className="lists__title__description">
                <p className="lists__title__description__name"> Enter Amount</p>
                <p className="lists__title__description__date">¥ 890.00</p>
              </div>
            </div>
            <form className="form-contains form-contains--currency">
              <select name="money">
                <option value="">YEN</option>
                <option value="">RS</option>
              </select>
            </form>
          </div>
          <div className="lists">
            <button className="button">Send Money</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
