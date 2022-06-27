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
          <div className="card">
            <div className="badge badge--black">
              <p className="badge badge__os">iOS</p>
            </div>

            <div className="card__heading">
              <p className="card__heading__title">
                Configuring Azure Active Directory documentation
              </p>
              <p className="card__heading__date">April 17</p>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={document}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Sathish</p>
            </div>
          </div>
          <div className="card">
            <div className="badge badge--green">
              <p className="badge badge__os">Android</p>
            </div>

            <div className="card__heading">
              <p className="card__heading__title">
                Icon for Customer Portal announcement is shown
              </p>
              <p className="card__heading__date">April 17</p>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={document}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={tick}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Guna</p>
            </div>
          </div>
          <div className="card">
            <div className="badge">
              <div className="badge badge--black">
                <p className="badge__os">iOS</p>
              </div>
              <div className="badge badge--green">
                <p className="badge__os">Android</p>
              </div>
            </div>
            <div className="card__heading">
              <p className="card__heading__title">Onboarding animation v2</p>
              <p className="card__heading__date">April 26</p>
            </div>
            <p className="card__description"> Pilot version with Lottie</p>
            <div className="card__containts">
              <img className="card__containts__image" src={document}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={figma}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Guna</p>
            </div>
          </div>
          <div className="card">
            <div className="badge">
              <div className="badge badge--black">
                <p className="badge__os">iOS</p>
              </div>
              <div className="badge badge--green">
                <p className="badge__os">Android</p>
              </div>
            </div>

            <div className="card__heading">
              <p className="card__heading__title">Onboarding animation v2</p>
              <p className="card__heading__date">April 26</p>
            </div>
            <p className="card__description"> Pilot version with Lottie</p>
            <div className="card__containts">
              <img className="card__containts__image" src={document}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={figma}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Guna</p>
            </div>
          </div>
          <div className="card">+</div>
        </div>
        {/* <!-- sidebar ends --> */}

        {/* <!-- card1 --> */}
        <div className="task-box">
          <div className="status status--green">
            <p className="status__name">Ongoing Task</p>
          </div>
          <div className="card">
            <div className="badge badge--brown">
              <p className="badge__os">Desktop</p>
            </div>

            <div className="card__heading">
              <p className="card__heading__title">Uplaod enhancement</p>
              <p className="card__heading__date">April 24</p>
            </div>

            <p className="card__description">
              {" "}
              New integration with cloud proividers
            </p>
            <div className="card__containts">
              <img className="card__containts__image" src={document}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={figma}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Guna</p>
            </div>
          </div>
          <div className="card">
            <div className="badge badge--blue">
              <p className="badge__os">Web</p>
            </div>

            <div className="card__heading">
              <p className="card__heading__title">
                Possibility to hide specific issue types when moving
              </p>

              <p className="card__heading__date">April 18</p>
            </div>
            <p className="card__description"> This can be edited</p>
            <div className="card__containts">
              <img className="card__containts__image" src={document}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={figma}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={tick}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Guna</p>
            </div>
          </div>
          <div className="card">+</div>
        </div>

        {/* <!-- card2 --> */}
        <div className="task-box">
          <div className="status status--purple">
            <p className="status__name">Completed</p>
          </div>
          <div className="card">
            <div className="badge">
              <div className="badge badge--black">
                <p className="badge__os">iOS</p>
              </div>
              <div className="badge badge--green">
                <p className="badge__os">Android</p>
              </div>
            </div>

            <div className="card__heading">
              <p className="card__heading__title">Homepage redesign</p>
              <p className="card__heading__date">March 13</p>
            </div>
            <p className="card__description"> New suggestive section added</p>

            <div className="card__containts">
              <img className="card__containts__image" src={document}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={figma}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={tick}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Guna</p>
            </div>
          </div>
          <div className="card">
            <div className="badge">
              <div className="badge badge--green">
                <p className="badge__os">Android</p>
              </div>
              <div className="badge badge--brown">
                <p className="badge__os">Desktop</p>
              </div>
            </div>

            <div className="card__heading">
              <p className="card__heading__title">Image Editing feature</p>

              <p className="card__heading__date">March 08</p>
            </div>
            <p className="card__description">
              {" "}
              Added support for PencilKit for image manipulation
            </p>

            <div className="card__containts">
              <img className="card__containts__image" src={document}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={figma}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={tick}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Guna</p>
            </div>
          </div>
          <div className="card">+</div>
        </div>
        {/* <!-- card3 --> */}
        <div className="task-box">
          <div className="status status--brown">
            <p className="status__name">In Developement</p>
          </div>
          <div className="card">
            <div className="badge badge--brown">
              <p className="badge__os">Desktop</p>
            </div>

            <div className="card__heading">
              <p className="card__heading__title">Catelina Update</p>

              <p className="card__heading__date">April 17</p>
            </div>
            <p className="card__description"> Support added</p>

            <div className="card__containts">
              <img className="card__containts__image" src={figma}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={tick}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Guna</p>
            </div>
          </div>
          <div className="card">
            <div className="badge badge--black">
              <p className="badge__os">iOS</p>
            </div>

            <div className="card__heading">
              <p className="card__heading__title">Updates to Pricing Plan</p>

              <p className="card__heading__date">March 10</p>
            </div>
            <p className="card__description"> New currency support added</p>

            <div className="card__containts">
              <img className="card__containts__image" src={document}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Document Link →
              </a>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={figma}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Link to design →
              </a>
            </div>

            <div className="card__containts">
              <img className="card__containts__image" src={tick}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Guna</p>
            </div>
          </div>
          <div className="card">+</div>
        </div>

        {/* <!-- card4 --> */}
        <div className="task-box task-box--bg-transparent">
          <div className="status status--gray">
            <p className="status__name">Live in Build</p>
          </div>

          <div className="card">
            <div className="badge">
              <div className="badge badge--black">
                <p className="badge__os">iOS</p>
              </div>
            </div>

            <div className="card__heading">
              <p className="card__heading__title">Mobile App v2.2.3</p>

              <p className="card__heading__date">April 11</p>
            </div>

            <p className="card__description"> Bugs fixed</p>

            <div className="card__containts">
              <img className="card__containts__image" src={tick}></img>
              <a className="card__containts__links" href="# ">
                {" "}
                Project Link →
              </a>
              <br />
            </div>
            <div className="card__containts">
              <img className="card__containts__image" src={crown}></img>
              <p className="card__containts__name">Guna</p>
            </div>
          </div>
          <div className="card">+</div>
        </div>
      </div>
    </>
  );
};

export default Assignment;
