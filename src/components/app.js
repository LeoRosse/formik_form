import React from "react";
import { Form, Field } from "formik";
import TextField from "@material-ui/core/TextField";

export const App = ({ values, errors, touched }) => (
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