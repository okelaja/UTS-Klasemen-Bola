import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailBall } from "../../api";
import { NavLink } from "react-router-dom";
import Hero from "../../component/Hero/Hero";
import "./Detail.css";

const Detail = (props) => {
    const {name, abbr, photo} = props;
  let { id } = useParams();
  const [detailBall, setDetailBall] = useState(null);

  useEffect(() => {
    getDetailBall(id)
      .then((result) => {
        setDetailBall(result);
      })
      .catch((error) => {
        console.error("Error fetching detail ball:", error);
      });
  }, [id]);
  return (
    <div className="">
      <Hero />
      <div class="container">
        <h1 className="title">Detail</h1>
        <div class="detail">
            {detailBall && (
            <div className="">
                <img src={detailBall.photo} alt="poster"/>
                <h3 className="h3D">{detailBall.name}</h3>
                <p className="id">Id: {id}</p>
                <div class="row">
                <span className="abbr">abbreviation:{detailBall.abbr}</span>
                </div>
                
                <p className="abbr">Slug: {detailBall.slug}</p>
               
                <NavLink to={"/"}>
                <button className="btn">Home</button>
                </NavLink>
            </div>
            )}
        </div>
      </div>
      
    </div>
  );
};

export default Detail;
