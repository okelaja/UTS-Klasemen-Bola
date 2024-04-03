import React, { useEffect, useState } from "react";
import "./Leagues.css";
import League from "../League/League";
import { getKlasemenList } from "../../api";
import AddBall from "../AddForm/AddForm";



const Leagues = () => {
  const [datas, setDatas] = useState([]);


  const addBall = (ball) => {
    setDatas([...datas, ball]);
  };

  useEffect(() => {
    getKlasemenList().then((result) => {
      setDatas(result);
    });
  },[]);

  return (
    <div className="">
      <h2>Data Klasemen </h2>
      <div className="leagues-container">
        {datas.map((data, index) => {
          return (
            <League
              id={data.id}
              name={data.name}
              abbr={data.abbr}
              photo={data.logos.light}
            />
          );
        })}
      </div>
      <AddBall onAddBall={addBall}/>
    </div>
  );
};

export default Leagues;
