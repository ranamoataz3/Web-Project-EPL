import FormikForm from "@/core/components/web-form/formik-form/FormikForm";
import InputField from "@/core/components/web-form/input/InputField";
import React, { useState } from "react";
import * as Yup from "yup";
import styles from "./signin.module.css";
import Link from "next/link";
import Button from "@/core/components/button/Button";

const SignIn = () => {
  const initialValues = {
    emailAddress: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .min(3)
      .email("Please enter a valid email address")
      .required("Please enter a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (data, { setErrors }) => {};

  return (
    <div className="flex centered h-[100vh] bg-neutral">
      <FormikForm
        className="p-6 md:p-10 rounded-md border-solid border-border min-w-[80%] lg:min-w-[50%] bg-white"
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
      >
        <InputField
          label="Email Address"
          name="emailAddress"
          placeholder="Enter your email address"
          className="bg-neutral"
        />
        <InputField
          label="Password"
          name="password"
          placeholder="Enter your password"
          className="bg-neutral"
          type="password"
        />
        <Button type="submit"  className="centered max-w-[100%]">Sign In</Button>
        <Link href="/auth/sign-up" className="block centered mt-4">Don't Have an Account ?</Link>
      </FormikForm>
    </div>
  );
};

export default SignIn;
