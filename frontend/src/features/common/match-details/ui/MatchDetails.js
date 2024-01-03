import React from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
// import matches from "../../all-matches/data/matches";
import TeamsCard from "./MatchTeamsCard";
import MatchTime from "./MatchTime";
import MatchOfficials from "./MatchOfficials";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "@/API/axios";
import routes from "@/API/routes";

const MatchDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  // const match = matches.find((match) => match._id === id);
  const user = useSelector((state) => state.user);
  const isAdmin = user.isAdmin;

  const [match, setMatch] = useState(null);

  async function getMatches() {
    try {
      const response = await axios.get(routes.match + id);
      console.log(response);
      setMatch(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div className="lg:px-24 md:px-14 px-4 py-10 flex flex-col gap-y-8">
      {match ? (
        <>
          <p className="h1 text-font-2 text-center font-medium">
            Match Details
          </p>
          <TeamsCard match={match} />
          <MatchTime match={match} />
          <MatchOfficials match={match} />{" "}
        </>
      ) : (
        <h1 className="text-center text-font-2"> Match Not Found</h1>
      )}
    </div>
  );
};

export default MatchDetails;
