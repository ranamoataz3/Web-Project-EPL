import React from "react";
import moment from "moment";

const MatchTime = (props) => {
  const match = props.match;
  return (
    <div className=" text-center flex flex-col justify-center items-center gap-y-4 mt-6">
      <p className="h3 text-primary">Match Day</p>
      <div className="flex flex-col gap-y-4 items-center">
        <p className="font-semibold headline3 weak">
          {moment(match.dateTime).format("Do MMM YYYY")}
        </p>
        <p className="headline3 weaker">
          {moment(match.dateTime).format(" h:mm a")}
        </p>
        <p className="font-semibold headline1 weak">{match.stadium.name}</p>
      </div>
    </div>
  );
};

export default MatchTime;
