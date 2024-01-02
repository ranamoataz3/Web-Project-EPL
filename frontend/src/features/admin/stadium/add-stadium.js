import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthCard from "@/features/auth/common/AuthCard";
import InputField from "@/core/components/web-form/input/InputField";
import * as Yup from "yup";
import Button from "@/core/components/button/Button";
import DialogBox from "@core/components/dialogBox/dialogBox";
import localStorage from "redux-persist/es/storage";

const AddStadium = () => {
  const [viewDialog, setViewDialog] = useState(null);
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
    setViewDialog(true);
    console.log(data);
  };

  return (
    <>
      <>
        {viewDialog && (
          <DialogBox
            description={{
              icon: "/imgs/check.png",
              title: "Success",
              message: "Stadium Added Successfully",
              titleColor:"#323133"
            }}
            onClose={() => setViewDialog(false)}
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
