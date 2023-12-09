import { Form, Formik } from "formik";
import styles from "./formikform.module.css";

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
                {({ values, setFieldValue, resetForm }) => (
                    <Form>{props.children}</Form>
                )}
            </Formik>
        </div>
    );
}


