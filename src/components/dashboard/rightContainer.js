import React from "react";
// import { Link } from "react-router-dom";
import { Avatar2, balance, chart, creditCard } from "../../assets/images.js";
const RightContainer = () => {
  return (
    <div className="right-container">
      <div className="card">
        <div className="lists">
          <p className="title">Account</p>
          <form> </form>
        </div>
        <div className="lists">
          <img src={balance} alt=""></img>
        </div>
      </div>
      <div className="card">
        <div className="lists">
          <p className="title">All Expenses</p>
          <form className="form-contains">
            <select name="Time">
              <option value="">Monthly</option>
              <option value="">Yearly</option>
            </select>
          </form>
        </div>
        <div className="lists">
          <img src={chart} alt=""></img>
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
            <form className="form-contains">
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
            <form className="form-contains">
              <select name="money">
                <option value="">YEN</option>
                <option value="">RS</option>
              </select>
            </form>
          </div>
          <div className="lists">
            <button className="btn btn--green">Send Money</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
