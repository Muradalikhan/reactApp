import "./App.css";
import { InputComp } from "./components/Input";
import { Field, useFormik } from "formik";
import { MyButton } from "./components/Button";
import * as Yup from "yup";
import { MultiselectInput } from "./components/MultiSelectInput";
import ReactSelect from "./components/ReactSelect";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(10, "must be 10 character or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "must be 10 character or less")
        .required("required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} className="form">
        <h1>Formik</h1>
        <div style={{ display: "flex", gap: 10 }}>
          <InputComp
            width="50%"
            name="firstName"
            placeholder="first name"
            {...formik.getFieldProps("firstName")}
          />

          <InputComp
            width="50%"
            name="lastName"
            placeholder="last name"
            {...formik.getFieldProps("lastName")}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {formik.errors.firstName && formik.touched.firstName ? (
            <p className="error-text">{formik.errors.firstName}</p>
          ) : null}
          {formik.errors.lastName && formik.touched.lastName ? (
            <p className="error-text">{formik.errors.lastName}</p>
          ) : null}
        </div>

        <InputComp
          name="email"
          placeholder="email"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email ? (
          <p className="error-text">{formik.errors.email}</p>
        ) : null}
        <div style={{ marginTop: "20px" }}></div>
        <ReactSelect
          name="country"
          value={formik.values.country}
          onChange={(e) => e.target.value}
          onBlur={formik.handleBlur}
        />
        <MyButton type="submit" title="Submit" fullwidth />
      </form>
    </div>
  );
}

export default App;
