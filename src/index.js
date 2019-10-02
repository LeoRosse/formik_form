import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";

const App = ({ values, errors, touched }) => (
  <Form>
    <div>
      <Field
        name="email"
        value={values.email}
        render={({ field, form }) => {
          return (
            <TextField
              id="email"
              label="Email"
              value={field.value}
              name={field.name}
              onChange={e => form.setFieldValue(field.name, e.target.value)}
              margin="normal"
              variant="outlined"
              error={touched.email && errors.email}
              helperText={touched.email && errors.email && `${errors.email}`}
            />
          );
        }}
      />
    </div>
    <div>
      <Field
        name="password"
        value={values.password}
        render={({ field, form }) => {
          return (
            <TextField
              id="password"
              label="Password"
              value={field.value}
              name={field.name}
              onChange={e => form.setFieldValue(field.name, e.target.value)}
              margin="normal"
              type="password"
              variant="outlined"
              error={touched.password && errors.password}
              helperText={
                touched.password && errors.password && `${errors.password}`
              }
            />
          );
        }}
      />
      {touched.password && errors.password && <p>{errors.password}</p>}
    </div>
    <label>
      <Field type="checkbox" name="newsletter" checked={values.newsletter} />
      Join our newsletter
    </label>
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <button type="submit">Submit</button>
  </Form>
);

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
