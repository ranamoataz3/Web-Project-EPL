import React from "react";
import Data from "@core/assets/data/CommonData";
import moment from "moment";

const TeamsCard = (props) => {
  const match = props.match;
  const teams = Data.teams;
  const homeTeam = teams.find((team) => team.id === match.homeTeam);
  const awayTeam = teams.find((team) => team.id === match.awayTeam);
  return (
    <div className="flex flex-row gap-2 justify-between items-center">
      <div className="flex flex-col md:flex-row gap-x-8 gap-y-3 md:items-center items-start md:w-[35%] w-[40%]">
        <img
          src={homeTeam.logo}
          alt="team logo"
          className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
        />
        <p className="font-semibold h6 text-font-1">{match.homeTeam}</p>
      </div>
      <h2 className="h2 text-font-3  text-center">Vs.</h2>
      <div className="flex flex-col md:flex-row-reverse gap-x-8 gap-y-3 md:justify-start md:items-center items-end md:w-[35%] w-[40%] text-right">
        <img
          src={awayTeam.logo}
          alt="team logo"
          className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
        />
        <p className="font-semibold h6 text-font-1">{match.awayTeam}</p>
      </div>
    </div>
  );
};

export default TeamsCard;
