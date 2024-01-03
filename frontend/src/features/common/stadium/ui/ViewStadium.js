import React from "react";
import Seat from "@/core/components/seat/Seat";
import { useEffect, useState } from "react";

const ViewStadium = (props) => {
  const seats = props.seats;
  const stadium = props.stadium;
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [seatWidth, setSeatWidth] = useState(0);

//   useEffect(() => {
//     // Function to update window width
//     const updateWindowWidth = () => {
//       const newWindowWidth = window.innerWidth;
//       setWindowWidth(newWindowWidth);

//       //   const seatWidth = Math.floor(newWindowWidth / stadium.width);
//       const seatWidth = parseInt(newWindowWidth / stadium.width);
//       //   const width = seatWidth - 4;

//       console.log("seatWidth", seatWidth);

//       setSeatWidth(seatWidth);
//     };

//     // Initial window width
//     updateWindowWidth();

//     // Event listener to update window width on resize
//     window.addEventListener("resize", updateWindowWidth);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("resize", updateWindowWidth);
//     };
//   }, []);

  return (
    <div className="flex flex-col gap-y-4 overflow-x-scroll w-full">
      {seats.map((row, index1) => (
        <div className="flex gap-x-4 mx-auto">
          {row.map((seat, index2) => (
            <Seat key={index1+index2} className={seat ? "bg-font-4" : "bg-primary"}>
              {props.children}
              {String(index1 + 1) + String(index2 + 1)}
            </Seat>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ViewStadium;
