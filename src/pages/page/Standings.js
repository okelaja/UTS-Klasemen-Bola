import React from "react";
import Main2 from "../../component/standings/Main/Main2";
import "./Standings.css";

const Standings = (props) => {
  const { id, name, abbreviation, seasonDisplay, season } = props;
  return (
    <div className="standing-container">
      <Main2 />
      <h3>{name}</h3> 
      <div className="card-s">
        
        <img src={`http://picsum.photos/200/300?r=${Math.floor(
          Math.random() * 1000
        )}`} alt="poster" />
        <div className="row-s">
          <h2 className="h">adaddd</h2>
          <small className="">{abbreviation}</small>
          <span className="season-display">Season: {seasonDisplay}</span>
          <span className="season">Season: {season}</span>
        </div>
        <h3 className="title">{id}</h3>
      </div>
    </div>
  );
};

export default Standings;