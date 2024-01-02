import React from "react";
import matches from "../data/matches";
import MatchCard from "./MatchCard";

const ViewMatches = () => {
  return (
    <div className="lg:px-16 md:px-10 px-4 py-10 flex flex-col gap-5 ">
      {matches.map((match) => (
        <MatchCard match={match} />
      ))}
    </div>
  );
};

export default ViewMatches;
