import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { withFormik } from "formik";
import * as yup from "yup";

//compoments
import { App } from "./components/app";

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || true,
      plan: plan || "premium"
    };
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Email non valida")
      .required("Email obbligatoria"),
    password: yup
      .string()
      .min(9, "La password deve essere almeno 9 caratteri")
      .required("Password obbligatoria")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "prova@prova.com") {
        setErrors({ email: "Questo è imbarazzante" });
      } else {
        resetForm();
      }
    }, 2000);
  }
})(App);

ReactDOM.render(<FormikApp />, document.getElementById("root"));
