import React from "react";
// import matches from "../data/matches";
import MatchCard from "./MatchCard";
import { useEffect, useState } from "react";
import axios from "@/API/axios";
import routes from "@/API/routes";


const ViewMatches = () => {

  const [matches, setMatches] = useState([]);

  async function getMatches() {
    try {
      const response = await axios.get(routes.matches);
      console.log(response);
      setMatches(response.data);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMatches();
  }, []);


  return (
    <div className="lg:px-16 md:px-10 px-4 py-10 flex flex-col gap-5 ">

      {matches.length != 0 ? matches.map((match) => (
        <MatchCard match={match} />
      )): <h1 className="text-center text-font-2"> No Matches Found</h1>}
    </div>
  );
};

export default ViewMatches;
