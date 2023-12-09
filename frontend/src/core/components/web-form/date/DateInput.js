import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import styles from "./date.module.css";
import { ErrorMessage } from "formik";

const DateInput = (props) => {
  return (
    <div className={styles.boxContainer}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={props.label}
          defaultValue={dayjs(props.date)}
          onChange={(date) =>
            props.setFieldValue(
              props.name,
              moment(date.$d, "YYYY-MM-DD").format("YYYY-MM-DD")
            )
          }
          sx={{
            "& .MuiInputBase-input": {
              fontSize: 16,
              paddingBottom: "16px",
              paddingTop: "16px",
            },
          }}
        />
      </LocalizationProvider>
      <ErrorMessage name={props.name}>{(msg) => <p>{msg}</p>}</ErrorMessage>
    </div>
  );
};

export default DateInput;
