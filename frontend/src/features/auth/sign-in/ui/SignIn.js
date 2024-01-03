import AuthCard from "../../common/AuthCard";
import InputField from "@/core/components/web-form/input/InputField";
import React, { useState } from "react";
import * as Yup from "yup";
import styles from "./signin.module.css";
import Link from "next/link";
import Button from "@/core/components/button/Button";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "@/API/axios";
import routes from "@/API/routes";
import { useDispatch } from "react-redux";
import { userActions } from "@/storage/store/UserSlice";
import DialogBox from "@core/components/dialogBox/dialogBox";

const SignIn = () => {
  const [viewDialog, setViewDialog] = useState(null);
  const [msg, setMsg] = useState(null);
  const [title, setTitle] = useState(null);
  const [img, setImg] = useState(null);
  const [response, setResponse] = useState(null);

  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .min(3)
      .email("Please enter a valid email address")
      .required("Please enter a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (data, { setErrors }) => {
    console.log(data);

    async function sendData(data) {
      console.log(data);
      try {
        const response = await axios.post(routes.logIn, data);
        console.log(response);
        setMsg("Logged in Successfully");
        setTitle("Success");
        setImg("/imgs/check.png");
        setResponse(response);
        setViewDialog(true);
        // dispatch(
        //   userActions.login({
        //     id: response.data.user._id,
        //     token: response.data.token,
        //     email: response.data.user.email,
        //     firstName: response.data.user.firstName,
        //     lastName: response.data.user.lastName,
        //     isAdmin: response.data.user.isAdmin,
        //   })
        // );
      } catch (err) {
        console.log(err);
        setMsg(err.response.data);
        setTitle("Failure");
        setImg("/imgs/cancel.png");
        setResponse(false);
        setViewDialog(true);
      }
    }

    sendData(data);
  };

  const handlecloseDialog = () => {
    setViewDialog(false);
    setMsg(null);
    setTitle(null);
    setImg(null);
    if (response) {
      dispatch(
        userActions.login({
          id: response.data.user._id,
          token: response.data.token,
          email: response.data.user.email,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          isAdmin: response.data.user.isAdmin,
        })
      );
    }
    window.location.reload();
  };

  useEffect(() => {
    if (user.loggedIn) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {" "}
      <>
        {viewDialog && (
          <DialogBox
            description={{
              icon: img,
              title: title,
              message: msg,
              titleColor: "#323133",
            }}
            onClose={() => handlecloseDialog()}
          />
        )}
      </>
      <AuthCard
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
      >
        <InputField
          label="Email Address"
          name="email"
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
        <Button
          type="submit"
          className="centered max-w-[100%]"
          btnclassName="rounded-sm bg-primary"
        >
          Sign In
        </Button>
        <Link href="/auth/sign-up" className="block centered mt-4">
          Don't Have an Account ?
        </Link>
      </AuthCard>
    </>
  );
};

export default SignIn;
