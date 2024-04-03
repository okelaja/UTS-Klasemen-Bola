import axios from "axios";
import { useParams } from "react-router-dom";

let { id } = useParams;
 
export const getKlasemenList = async () => {
    const { data } = await axios.get("https://api-football-standings.azharimm.dev/leagues");
    return data.data;
};

export const getDetailBall = async (id) => {
    const { data } = await axios.get(`http://api-football-standings.azharimm.dev/leagues/${id}`);
    return data.data;
};

export const getStandingsList = async () => {
    const { data } = await axios.get("https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2020&sort=asc");
    return data.data;
};

