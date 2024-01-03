import AuthCard from "@features/auth/common/AuthCard";
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

const AddMatch = () => {
    // Component logic goes here

      const user = useSelector((state) => state.user);
      const router = useRouter();
      const [viewDialog, setViewDialog] = useState(null);
      const [msg, setMsg] = useState(null);
      const [title, setTitle] = useState(null);
      const [img, setImg] = useState(null);
      const [response, setResponse] = useState(null);
    
    
      const initialValues = {
        homeTeam: "",
        awayTeam: "",
        stadium: "",
        dateTime: moment().format("YYYY-MM-DD"),
        referee: "",
        linesmen: [],
      };
    
      const validationSchema = Yup.object().shape({
        homeTeam: Yup.string().required("Home team is required"),
        awayTeam: Yup.string().required("Away team is required"),
        stadium: Yup.string().required("stadium is required"),
        birthDate: Yup.date()
          .min(
            moment().format("YYYY-MM-DD"),
            "Birth date must be later than current date " 
          )
        //   .max(
        //     moment().subtract(10, "years").format("YYYY-MM-DD"),
        //     "Birth date must be before than " +
        //       moment().subtract(10, "years").format("MM-DD-YYYY")
        //   )
          .required("Match Date is required."),
        referee: Yup.string().required("Referee is required"),
        linesmen: Yup.array().required("Linesmen are required"),
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
        }
        window.location.reload();
      };
    
      useEffect(() => {
        if (!user.isAdmin) {
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
              label="homeTeam"
              name="homeTeam"
              placeholder="Enter homeTeam"
              className="bg-neutral"
            />
            <InputField
              label="awayTeam"
              name="awayTeam"
              placeholder="Enter awayTeam"
              className="bg-neutral"
            />
    
            <InputField
              label="stadium"
              name="stadium"
              placeholder="Enter stadium"
              className="bg-neutral"
            />
            
            <DateInput
              label="dateTime"
              name="dateTime"
              date={initialValues.dateTime}
            />
            <InputField
              label="referee"
              name="referee"
              placeholder="Enter referee"
              className="bg-neutral"
            />
            <InputField
              label="linesman 1"
              name="linesman 1"
              placeholder="Enter linesman 1"
              className="bg-neutral"
            />
    
            <InputField
              label="linesman 2"
              name="linesman 2"
              placeholder="Enter linesman 2"
              className="bg-neutral"
            />
            <Button
              type="submit"
              className="centered max-w-[100%]"
              btnclassName="rounded-sm bg-primary"
            >
             Create a Match
            </Button>
          </AuthCard>
        </>
      );
    };


export default AddMatch;
