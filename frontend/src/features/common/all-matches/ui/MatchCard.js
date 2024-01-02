import React from "react";
import Data from "@core/assets/data/CommonData";
import moment from "moment";
import Link from "next/link";

const MatchCard = (props) => {
  const teams = Data.teams;
  const match = props.match;
  const homeTeam = teams.find((team) => team.id === match.homeTeam);
  const awayTeam = teams.find((team) => team.id === match.awayTeam);

  return (
    <Link
      href={`/matches/${match._id}`}
      className="p-4 block card w-auto h-auto rounded-md border-2 border-border border-solid bg-white"
    >
      <div className="flex flex-row gap-2 justify-between md:items-center md:text-center">
        <div className="flex flex-col md:flex-row gap-x-5 gap-y-3 md:items-center items-start md:w-[35%] w-[40%]">
          <img src={homeTeam.logo} alt="team logo" className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <p className="font-semibold headline2 text-font-1">{match.homeTeam}</p>
        </div>
        <div className="md:flex flex-col gap-y-4 items-center hidden md:w-[30%]">
          <p className="font-semibold headline3 weak">
            {moment(match.dateTime).format("Do MMM YYYY")}
          </p>
          <p className="paragraph1 weaker">
            {moment(match.dateTime).format(" h:mm a")}
          </p>
          <p className="font-semibold paragraph2 weak">{match.stadium.name}</p>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-x-5 gap-y-3 md:justify-start md:items-center items-end md:w-[35%] w-[40%] text-right">
          <img src={awayTeam.logo} alt="team logo" className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          <p className="font-semibold headline2 text-font-1">{match.awayTeam}</p>
        </div>
      </div>
      <div className="md:hidden flex gap-x-5 items-center justify-between mt-3">
        <p className="font-semibold headline3 weak">
          {moment(match.dateTime).format("Do MMM YYYY")}
        </p>
        <p className="paragraph1 weaker text-center">
          {moment(match.dateTime).format(" h:mm a")}
        </p>
        <p className="font-semibold paragraph2 weak text-right">
          {match.stadium.name}
        </p>
      </div>
    </Link>
  );
};

export default MatchCard;
