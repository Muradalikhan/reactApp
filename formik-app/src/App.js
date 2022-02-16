import "./App.css";
import { InputComp } from "./components/Input";
import { Field, useFormik } from "formik";
import { MyButton } from "./components/Button";
import * as Yup from "yup";
import { MultiselectInput } from "./components/MultiSelectInput";

function App() {
  const options = [
    { option: " option 1", id: 1 },
    { option: " option 2", id: 2 },
    { option: " option 3", id: 3 },
    { option: " option 4", id: 4 },
    { option: " option 5", id: 5 },
    { option: " option 6", id: 6 },
    { option: " option 7", id: 7 },
  ];

  const onSelect = (list, item) => {
    console.log(list);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: [],
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
        <InputComp
          name="firstName"
          placeholder="first name"
          {...formik.getFieldProps("firstName")}
        />
        {formik.errors.firstName && formik.touched.firstName ? (
          <p className="error-text">{formik.errors.firstName}</p>
        ) : null}
        <InputComp
          name="lastName"
          placeholder="last name"
          {...formik.getFieldProps("lastName")}
        />
        {formik.errors.lastName && formik.touched.lastName ? (
          <p className="error-text">{formik.errors.lastName}</p>
        ) : null}
        <InputComp
          name="email"
          placeholder="email"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email ? (
          <p className="error-text">{formik.errors.email}</p>
        ) : null}
        <div style={{ marginTop: "20px" }}></div>
        <MultiselectInput
          options={options}
          name="country"
          value={formik.values.country}
          onSelect={onSelect}
          onBlur={formik.handleBlur}
        />
        <MyButton type="submit" title="Submit" fullwidth />
      </form>
    </div>
  );
}

export default App;
