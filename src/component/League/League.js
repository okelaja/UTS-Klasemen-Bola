import React from "react";
import "./League.css";
import { NavLink } from "react-router-dom";


const League = (props) => {
  const { id, name, abbr, photo} = props;
    return (
      <div class="">
        <div className="card">
        <img src={photo} alt="poster" />
        <div class="row">
          <small className="abbr">{abbr}</small>
        </div>
        <h3 className="title">
          <NavLink to={`/detail/${id}`}>{name} </NavLink>
        </h3>
      </div>
      </div>
      
    );
};

export default League;
