import React from "react";
import FormikForm from "@/core/components/web-form/formik-form/FormikForm";

const AuthCard = (props) => {
  return (
    <div className="flex centered min-h-[75vh] bg-neutral pt-6 pb-6">
      <FormikForm
        className="p-6 md:p-10 rounded-md border-solid border-border min-w-[80%] lg:min-w-[50%] bg-white"
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        handleSubmit={props.handleSubmit}
      >
        {props.children}
      </FormikForm>
    </div>
  );
};

export default AuthCard;
