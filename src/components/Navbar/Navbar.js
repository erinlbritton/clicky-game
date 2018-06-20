import React from "react";
import "./navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default sticky">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <img className="leaf pull-left" src="../../images/leaf.png" alt="Animal Crossing Leaf Icon"/>
          <div className="navbar-text">Animal Crossing Memory</div>
        </div>
        <div className="col-md-2 col-md-offset-4 col-sm-4">
          <div className="navbar-text">Current Score: {props.currentScore}</div>
        </div>
        <div className="col-md-2 col-sm-4">
          <div className="navbar-text">Top Score: {props.topScore}</div>
        </div>
      </div>
      <div className="row rules-row">
        <div className="col-md-12">
        Test your member by clicking each villager once. Each click shuffles the cards. The game will restart if you click a villager more than once. 
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
