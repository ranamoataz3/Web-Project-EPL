import React from "react";
import { useRouter } from "next/router";
import ReservationSeats from "./ReservationSeats";
import axios from "@/API/axios";
import routes from "@/API/routes";
import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  // Component logic goes here
  const router = useRouter();
  const { id } = router.query;
  const [match, setMatch] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showStadium, setShowStadium] = useState(true);

  async function getMatches() {
    try {
      const response = await axios.get(routes.match + id);
      //   console.log(response);
      setMatch(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMatches();
  }, []);

  const getformdata = (seats) => {
    console.log("inside reservation");
    setSelectedSeats(seats);
    setShowStadium(false);
  };

  return (
    <div>
      {match ? (
        showStadium ? (
          <div>
            <ReservationSeats
              seats={match.seats}
              stadium={match.stadium}
              getformdata={getformdata}
            />
            ;
          </div>
        ) : (
          <ReservationForm seats={selectedSeats} />
        )
      ) : (
        <h1 className="text-center text-font-2"> Match Not Found</h1>
      )}
    </div>
  );
};

export default Reservation;
