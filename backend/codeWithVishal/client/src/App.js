import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import AddEditTour from "./pages/AddEditTour";
import SingleTour from "./pages/singleTour";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/404page";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    dispatch(setUser(user));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/addTour"
            element={
              <ProtectedRoutes>
                <AddEditTour />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/editTour/:id"
            element={
              <ProtectedRoutes>
                <AddEditTour />
              </ProtectedRoutes>
            }
          />
          <Route path="/singleTour/:id" element={<SingleTour />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
