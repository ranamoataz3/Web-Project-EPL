import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthCard from "@/features/auth/common/AuthCard";
import InputField from "@/core/components/web-form/input/InputField";
import * as Yup from "yup";
import Button from "@/core/components/button/Button";
import DialogBox from "@core/components/dialogBox/dialogBox";
import axios from "@/API/axios";
import routes from "@/API/routes";

const ReservationForm = (props) => {
  const router = useRouter();
  const { id } = router.query;
  // Your component logic here

  const [viewDialog, setViewDialog] = useState(null);
  const [msg, setMsg] = useState(null);
  const [title, setTitle] = useState(null);
  const [img, setImg] = useState(null);

  const initialValues = {
    seats: props.seats,
    creditCardNumber: "",
    pinNumber: "",
  };

  const validationSchema = Yup.object().shape({
    creditCardNumber: Yup.string()
      .matches(/^\d{15,16}$/, "Credit card must be 15 or 16 digits")
      .required("Credit card number is required"),
    pinNumber: Yup.string()
      .matches(/^\d{4}$/, "PIN must be exactly 4 digits")
      .required("PIN is required"),
  });

  const handleSubmit = (data, { setErrors }) => {
    async function sendData(data) {
      console.log(data);
      try {
        const response = await axios.post(routes.reserve + id, data);
        console.log(response);
        setMsg(
          response.data.message +
            " and the ticket number is : " +
            response.data.ticketNumber
        );
        setTitle("Success");
        setImg("/imgs/check.png");
        setViewDialog(true);
      } catch (err) {
        console.log(err.response.data.message);
        setMsg(err.response.data.message);
        setTitle("Failure");
        setImg("/imgs/cancel.png");
        setViewDialog(true);
      }
    }

    sendData(data);
    // console.log(data);
  };

  const handlecloseDialog = () => {
    setViewDialog(false);
    setMsg(null);
    setTitle(null);
    setImg(null);
    router.push("/matches/" + id);
  };

  return (
    <>
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
          label="Credit Card Number"
          name="creditCardNumber"
          placeholder="Enter your credit card number"
          className="bg-neutral"
        />
        <InputField
          label="Pin Number"
          name="pinNumber"
          placeholder="Enter your pin number"
          className="bg-neutral"
          type="password"
        />
        <Button
          type="submit"
          className="centered max-w-[100%]"
          btnclassName="rounded-sm bg-primary"
        >
          Add Stadium
        </Button>
      </AuthCard>
    </>
  );
};

export default ReservationForm;
