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
import axios from "@/API/axios";
import routes from "@/API/routes";
import { useDispatch } from "react-redux";
import { userActions } from "@/storage/store/UserSlice";
import DialogBox from "@core/components/dialogBox/dialogBox";

const SignUp = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [viewDialog, setViewDialog] = useState(null);
  const [msg, setMsg] = useState(null);
  const [title, setTitle] = useState(null);
  const [img, setImg] = useState(null);
  const [response, setResponse] = useState(null);

  const genderOptions = [
    { label: "Male", value: "male", selected: true },
    { label: "Female", value: "female", selected: false },
  ];

  const initialValues = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    birthDate: moment().subtract(10, "years").format("YYYY-MM-DD"),
    gender: "male",
    city: "",
    address: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .min(3)
      .email("Invalid email address")
      .required(" Email field is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    birthDate: Yup.date()
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
    let birthDate = new Date(data.birthDate);
    data.birthDate = birthDate;
    console.log(data);

    async function sendData(data) {
      console.log(data);
      try {
        const response = await axios.post(routes.signUp, data);
        console.log(response);
        setMsg("Signed Up Successfully");
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
    console.log(user);
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
          label="UserName"
          name="username"
          placeholder="Enter your username"
          className="bg-neutral"
        />
        <InputField
          label="Email Address"
          name="email"
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
          name="birthDate"
          date={initialValues.birthDate}
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
          btnclassName="rounded-sm bg-primary"
        >
          Sign UP
        </Button>
        <Link href="/auth/sign-in" className="block centered mt-4">
          Already Have an Account ?
        </Link>
      </AuthCard>
    </>
  );
};

export default SignUp;
