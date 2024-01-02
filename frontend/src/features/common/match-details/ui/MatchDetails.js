import React from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import matches from "../../all-matches/data/matches";
import TeamsCard from "./MatchTeamsCard";
import MatchTime from "./MatchTime";
import MatchOfficials from "./MatchOfficials";
import { useSelector } from "react-redux";

const MatchDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const match = matches.find((match) => match._id === id);
  const user = useSelector((state) => state.user);
  const isAdmin = user.isAdmin;



  return (
    <div className="lg:px-24 md:px-14 px-4 py-10 flex flex-col gap-y-8">
      <p className="h1 text-font-2 text-center font-medium">Match Details</p>
      <TeamsCard match={match} />
      <MatchTime match={match} />
      <MatchOfficials match={match} />
    </div>
  );
};

export default MatchDetails;
