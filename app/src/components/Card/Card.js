import React from "react";
import "./card.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// Add "clicked={props.clicked.toString()}" to img props for click validation
const Card = props => (
    <div className="col-md-3 col-sm-4 AC">
        <img className="ACimg" src={props.image} key={props.name} alt={props.name}  onClick={() => props.handleClick(props.name)} />
    </div>
);

export default Card;
