import React from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import matches from "../../all-matches/data/matches";
import TeamsCard from "./MatchTeamsCard";

const MatchDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const match = matches.find((match) => match._id === id);

  return (
    <div className="lg:px-16 md:px-10 px-4 py-10 flex flex-col gap-y-4">
      <h1 className="h1 text-font-2 text-center">Match Details</h1>
      <TeamsCard match={match} />
    </div>
  );
};

export default MatchDetails;
