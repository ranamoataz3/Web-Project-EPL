import React from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";

const MatchDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const genderOptions = [
    { label: "Male", value: "male", selected: true },
    { label: "Female", value: "female", selected: false },
  ];
  return (
    <div>
      <h1>Match Details</h1>
      <p>Match ID: {id}</p>
    </div>
  );
};

export default MatchDetails;
