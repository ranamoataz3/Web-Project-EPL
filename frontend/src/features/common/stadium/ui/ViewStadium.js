import React from "react";
import Seat from "@/core/components/seat/Seat";
import { useEffect, useState } from "react";

const ViewStadium = (props) => {
  const seats = props.seats;
  const stadium = props.stadium;

  return (
    <div className="flex flex-col gap-y-4 overflow-x-scroll w-full">
      {seats.map((row, index1) => (
        <div className="flex gap-x-4 mx-auto">
          {row.map((seat, index2) => (
            <Seat key={index1+index2} className={seat ? "bg-font-4" : "bg-primary"}>

              {String(index1 + 1) + String(index2 + 1)}
              {props.children}
            </Seat>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ViewStadium;
