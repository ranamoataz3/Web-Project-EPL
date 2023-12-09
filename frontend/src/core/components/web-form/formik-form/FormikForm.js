import { Form, Formik } from "formik";
import styles from "./formikform.module.css";
import React from "react";

export default function FormikForm(props) {
  return (
    <div className={props.className}>
      <Formik
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        onSubmit={props.handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(formikProps) => {
          const childrenWithSetFieldValue = React.Children.map(
            props.children,
            (child) => {
              return React.cloneElement(child, {
                setFieldValue: formikProps.setFieldValue,
              });
            }
          );

          return <Form>{childrenWithSetFieldValue}</Form>;
        }}
      </Formik>
    </div>
  );
}
