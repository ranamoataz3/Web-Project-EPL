import AuthCard from "../../common/AuthCard";
import InputField from "@/core/components/web-form/input/InputField";
import React, { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import Button from "@/core/components/button/Button";
import RadioButton from "@/core/components/web-form/radiobutton/RadioButton";
import moment from "moment";
import DateInput from "@/core/components/web-form/date/DateInput";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const SignUp = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  const genderOptions = [
    { label: "Male", value: "male", selected: true },
    { label: "Female", value: "female", selected: false },
  ];

  const initialValues = {
    username: "",
    emailAddress: "",
    firstName: "",
    lastName: "",
    birthdate: moment().subtract(10, "years").format("YYYY-MM-DD"),
    gender: "male",
    city: "",
    address: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    emailAddress: Yup.string()
      .min(3)
      .email("Invalid email address")
      .required(" Email field is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    birthdate: Yup.date()
      .min(
        moment("1930-01-01").format("YYYY-MM-DD"),
        "Birth date must be later than " +
          moment("1930-01-01").format("DD-MM-YYYY")
      )
      .max(
        moment().subtract(10, "years").format("YYYY-MM-DD"),
        "Birth date must be before than " +
          moment().subtract(10, "years").format("MM-DD-YYYY")
      )
      .required("Birth Date is required."),
    gender: Yup.string().required("Gender is required"),
    city: Yup.string().required("City is required"),
    password: Yup.string().min(8, "Min 8 chars").required("Field required"),
  });

  const handleSubmit = (data, { setErrors }) => {
    let birthdate = new Date(data.birthdate);
    data.birthdate = birthdate;
    console.log(data);
  };

  useEffect(() => {
    if (user.loggedIn) {
      router.push('/');
    }
  }, []);

  return (
    <AuthCard
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
    >
      <InputField
        label="UserName"
        name="username"
        placeholder="Enter your username"
        className="bg-neutral"
      />
      <InputField
        label="Email Address"
        name="emailAddress"
        placeholder="Enter your email address"
        className="bg-neutral"
      />

      <InputField
        label="First Name"
        name="firstName"
        placeholder="Enter your First Name"
        className="bg-neutral"
      />
      <InputField
        label="Last Name"
        name="lastName"
        placeholder="Enter your Last Name"
        className="bg-neutral"
      />
      <RadioButton label="Gender" name="gender" options={genderOptions} />
      <DateInput
        label="Birth Date"
        name="birthdate"
        date={initialValues.birthdate}
      />
      <InputField
        label="City"
        name="city"
        placeholder="Enter your City"
        className="bg-neutral"
      />
      <InputField
        label="Address"
        name="address"
        placeholder="Enter your Address"
        className="bg-neutral"
      />

      <InputField
        label="Password"
        name="password"
        placeholder="Enter your password"
        className="bg-neutral"
        type="password"
      />
      <Button
        type="submit"
        className="centered max-w-[100%]"
        btnclassName="rounded-sm"
      >
        Sign UP
      </Button>
      <Link href="/auth/sign-in" className="block centered mt-4">
        Already Have an Account ?
      </Link>
    </AuthCard>
  );
};

export default SignUp;
