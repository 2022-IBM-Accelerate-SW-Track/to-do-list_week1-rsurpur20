import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src = {profile_pic_name}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Roshni</div>
          <div className="brief_description">
            <h1>testing from about.js page</h1>
    
          </div>
        </div>
      </div>
    </div>
    )
  }
}