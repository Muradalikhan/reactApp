import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { AboutUs, Contact, LogIn, Main, SignUp } from "../Pages";
import PageNotFount from "../Pages/404page/404-page";


const RouterApp = () => {
    return (


        <>
         
         <Header/>

            <Router>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<PageNotFount />} />
                </Routes>
            </Router>


            <Footer/>
        </>

    )
}

export default RouterApp