import React from "react";
import Seat from "@/core/components/seat/Seat";
import { useEffect, useState } from "react";
import Button from "@/core/components/button/Button";

const ReservationSeats = (props) => {
  // Component logic goes here

  const seats = props.seats;
  const stadium = props.stadium;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = seats.length;
  const cols = seats[0].length;

  // Create a new array with the same dimensions
  const coloredSeats = [];

  // Loop through rows
  for (let row = 0; row < rows; row++) {
    // Initialize an empty row for the coloredSeats array
    coloredSeats[row] = [];

    // Loop through columns
    for (let col = 0; col < cols; col++) {
      // Check the condition in selectedSeatscopy
      if (seats[row][col] === false) {
        // If the condition is true (false in this case), set color to blue
        coloredSeats[row][col] =
          "bg-primary hover:bg-primary-hover hover:cursor-pointer";
      } else {
        // If the condition is false (not false), set color to gray
        coloredSeats[row][col] = "bg-font-4";
      }
    }
  }

  const [coloredSeatsState, setColoredSeatsState] = useState(coloredSeats);

  const selectseat = (row, col) => {
    const seat = { row: row + 1, column: col + 1 };

    // Create new copies of arrays
    const selectedSeatscopy = [...selectedSeats];
    const coloredSeatsStatecopy = coloredSeatsState.map((row) => [...row]);

    if (seats[row][col] === false) {
      const seatIndex = selectedSeatscopy.findIndex(
        (selectedSeat) =>
          selectedSeat.row === seat.row && selectedSeat.column === seat.column
      );

      if (seatIndex !== -1) {
        selectedSeatscopy.splice(seatIndex, 1);
        coloredSeatsStatecopy[row][col] =
          "bg-primary hover:bg-primary-hover hover:cursor-pointer";
      } else {
        selectedSeatscopy.push(seat);
        coloredSeatsStatecopy[row][col] =
          "bg-green hover:bg-green-hover hover:cursor-pointer";
      }

      console.log(selectedSeatscopy);
      console.log(coloredSeatsStatecopy);

      setColoredSeatsState(coloredSeatsStatecopy);
      setSelectedSeats(selectedSeatscopy);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-y-4 overflow-x-scroll w-full">
        {seats.map((row, index1) => (
          <div className="flex gap-x-4 mx-auto">
            {row.map((seat, index2) => (
              <div onClick={() => selectseat(index1, index2)}>
                {" "}
                <Seat
                  key={index1 + index2}
                  className={coloredSeatsState[index1][index2]}
                >
                  {String(index1 + 1) + String(index2 + 1)}
                </Seat>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className="flex justify-center gap-11 mt-7"
        onClick={() => props.getformdata(selectedSeats)}
      >
        <Button
          btnclassName="rounded-md w-32 bg-font-3 text-white "
          className="flex items-center justify-center w-fit"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ReservationSeats;
