import React from "react";

const MatchOfficials = (props) => {
  const match = props.match;

  return (
    // Your JSX code here
<div className=" text-center flex flex-col justify-center items-center gap-y-4 mt-6">
      <p className="h3 text-primary">Match Officials</p>
      <div className="flex flex-col gap-y-4 items-center w-full">
        <p className="font-semibold headline3 weak">
          Referee: {match.referee.name}
        </p>
        <div className="flex justify-between w-full gap-x-4">
        {match.linesmen.map((linesman) => (
          <p className="font-semibold headline3 weak">
            Linesman: {linesman.name}
          </p>
        ))}
        </div>

      </div>
    </div>
  );
};

export default MatchOfficials;
