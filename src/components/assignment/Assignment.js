import React from "react";
// import { Link } from "react-router-dom";
import { crown, tick, figma, document } from "../../assets/images.js";
const Assignment = () => {
  return (
    <>
      <h6 className="heading">Khanban Board</h6>

      <div className="page-container">
        {/* <!-- sidebar starts --> */}
        <div className="sidebar">
          <div className="task-card">
            <div className="badge badge--black">
              <p className="badge badge__os">iOS</p>
            </div>

            <p className="task-card__heading">
              Configuring Azure Active Directory documentation
            </p>
            <p className="task-card__date">April 17</p>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={document}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Sathish</p>
            </div>
          </div>
          <div className="task-card">
            <div className="badge badge--green">
              <p className="badge badge__os">Android</p>
            </div>

            <p className="task-card__heading">
              Icon for Customer Portal announcement is shown
            </p>
            <p className="task-card__date">April 17</p>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={document}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={tick}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Guna</p>
            </div>
          </div>
          <div className="task-card">
            <div className="badge">
              <div className="badge badge--black">
                <p className="badge__os">iOS</p>
              </div>
              <div className="badge badge--green">
                <p className="badge__os">Android</p>
              </div>
            </div>

            <p className="task-card__heading">Onboarding animation v2</p>
            <p className="task-card__date">April 26</p>
            <p className="task-card__description"> Pilot version with Lottie</p>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={document}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={figma}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Guna</p>
            </div>
          </div>
          <div className="task-card">
            <div className="badge">
              <div className="badge badge--black">
                <p className="badge__os">iOS</p>
              </div>
              <div className="badge badge--green">
                <p className="badge__os">Android</p>
              </div>
            </div>

            <p className="task-card__heading">Onboarding animation v2</p>
            <p className="task-card__date">April 26</p>
            <p className="task-card__description"> Pilot version with Lottie</p>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={document}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={figma}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Guna</p>
            </div>
          </div>
          <div className="search-bar">+</div>
        </div>
        {/* <!-- sidebar ends --> */}

        {/* <!-- card1 --> */}
        <div className="card">
          <div className="status status--green">
            <p className="status__name">Ongoing Task</p>
          </div>
          <div className="task-card">
            <div className="badge badge--brown">
              <p className="badge__os">Desktop</p>
            </div>

            <p className="task-card__heading">Uplaod enhancement</p>
            <p className="task-card__date">April 24</p>
            <p className="task-card__description">
              {" "}
              New integration with cloud proividers
            </p>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={document}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={figma}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Guna</p>
            </div>
          </div>
          <div className="task-card">
            <div className="badge badge--blue">
              <p className="badge__os">Web</p>
            </div>

            <p className="task-card__heading">
              Possibility to hide specific issue types when moving
            </p>

            <p className="task-card__date">April 18</p>
            <p className="task-card__description"> This can be edited</p>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={document}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={figma}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={tick}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Guna</p>
            </div>
          </div>
          <div className="search-bar">+</div>
        </div>

        {/* <!-- card2 --> */}
        <div className="card">
          <div className="status status--purple">
            <p className="status__name">Completed</p>
          </div>
          <div className="task-card">
            <div className="badge">
              <div className="badge badge--black">
                <p className="badge__os">iOS</p>
              </div>
              <div className="badge badge--green">
                <p className="badge__os">Android</p>
              </div>
            </div>
            <p className="task-card__heading">Homepage redesign</p>

            <p className="task-card__date">March 13</p>
            <p className="task-card__description">
              {" "}
              New suggestive section added
            </p>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={document}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={figma}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={tick}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Guna</p>
            </div>
          </div>
          <div className="task-card">
            <div className="badge">
              <div className="badge badge--green">
                <p className="badge__os">Android</p>
              </div>
              <div className="badge badge--brown">
                <p className="badge__os">Desktop</p>
              </div>
            </div>

            <p className="task-card__heading">Image Editing feature</p>

            <p className="task-card__date">March 08</p>
            <p className="task-card__description">
              {" "}
              Added support for PencilKit for image manipulation
            </p>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={document}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={figma}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={tick}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Guna</p>
            </div>
          </div>
          <div className="search-bar">+</div>
        </div>
        {/* <!-- card3 --> */}
        <div className="card">
          <div className="status status--brown">
            <p className="status__name">In Developement</p>
          </div>
          <div className="task-card">
            <div className="badge badge--brown">
              <p className="badge__os">Desktop</p>
            </div>

            <p className="task-card__heading">Catelina Update</p>

            <p className="task-card__date">April 17</p>
            <p className="task-card__description"> Support added</p>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={figma}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={tick}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Guna</p>
            </div>
          </div>
          <div className="task-card">
            <div className="badge badge--black">
              <p className="badge__os">iOS</p>
            </div>

            <p className="task-card__heading">Updates to Pricing Plan</p>

            <p className="task-card__date">March 10</p>
            <p className="task-card__description">
              {" "}
              New currency support added
            </p>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={document}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={figma}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={tick}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Guna</p>
            </div>
          </div>
          <div className="search-bar">+</div>
        </div>

        {/* <!-- card4 --> */}
        <div className="card card--bg-transparent">
          <div className="status status--gray">
            <p className="status__name">Live in Build</p>
          </div>

          <div className="task-card">
            <div className="badge">
              <div className="badge badge--black">
                <p className="badge__os">iOS</p>
              </div>
            </div>

            <p className="task-card__heading">Mobile App v2.2.3</p>

            <p className="task-card__date">April 11</p>

            <p className="task-card__description"> Bugs fixed</p>

            <div className="task-card__containts">
              <img className="task-card__containts__image" src={tick}></img>
              <a className="task-card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
              <br />
            </div>
            <div className="task-card__containts">
              <img className="task-card__containts__image" src={crown}></img>
              <p className="task-card__containts__name">Guna</p>
            </div>
          </div>
          <div className="search-bar">+</div>
        </div>
      </div>
    </>
  );
};

export default Assignment;
