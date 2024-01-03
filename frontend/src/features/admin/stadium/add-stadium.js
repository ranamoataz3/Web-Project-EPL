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

const AddStadium = () => {
  const [viewDialog, setViewDialog] = useState(null);
  const [msg, setMsg] = useState(null);
  const [title, setTitle] = useState(null);
  const [img, setImg] = useState(null);

  const initialValues = {
    name: "",
    width: "",
    height: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    width: Yup.number()
      .min(5, "Width must be at least 5")
      .max(15, "Width must be at most 15")
      .required("Width is required"),
    height: Yup.number()
      .min(5, "Height must be at least 5")
      .max(10, "Height must be at most 10")
      .required("Height is required"),
  });

  const handleSubmit = (data, { setErrors }) => {
    async function sendData(data) {
      console.log(data);
      try {
        const response = await axios.post(routes.stadium, data);
        console.log(response);
        setMsg("Stadium Added Successfully");
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
  };

  const handlecloseDialog = () => {
    setViewDialog(false);
    setMsg(null);
    setTitle(null);
    setImg(null);
    window.location.reload();
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
          label="Name"
          name="name"
          placeholder="Enter Stadium Name"
          className="bg-neutral"
        />
        <InputField
          label="Height"
          name="height"
          placeholder="Enter Stadium Height"
          className="bg-neutral"
        />
        <InputField
          label="Width"
          name="width"
          placeholder="Enter Stadium Width"
          className="bg-neutral"
        />
        <Button
          type="submit"
          className="centered max-w-[100%]"
          btnclassName="rounded-sm"
        >
          Add Stadium
        </Button>
      </AuthCard>
    </>
  );
};

export default AddStadium;
