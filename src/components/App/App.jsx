import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { Main } from "../Main/Main";
// import { Movies } from "../Movies/Movies";
// import { SavedMovies } from "../SavedMovies/SavedMovies";

import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";


import "./App.css";

const App = () => {

    return <>
        <Header />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />              
    </>
};

export default App;