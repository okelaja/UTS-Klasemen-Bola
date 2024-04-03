import React, { useEffect, useState } from "react";

import { getStandingsList } from "../../../api";
import Standings from "../../../pages/page/Standings";

const Standing = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getStandingsList().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div className="">
      <h2>Data Standing</h2>
      <div className="leagues-container">
        {datas.dada?.map((data) => {
          return (
            <Standings
              key={data.name}
              id={data.id}
              name={data.name}
              abbr={data.abbreviation}
              photo={data.logos.light}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Standing;