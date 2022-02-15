import "./App.css";
import InputComp from "./components/Input";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  return (
    <div className="App">
      <form className="form">
        <h1>Formik</h1>
        <InputComp
          placeholder="first name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <InputComp
          placeholder="last name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        <InputComp
          placeholder="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </form>
    </div>
  );
}

export default App;
