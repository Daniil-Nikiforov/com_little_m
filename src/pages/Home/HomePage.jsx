import React from "react";
import logo from "./../../assets/logo.png";
import "./homePage.css";
import Cloud from "../../components/Cloud/Cloud.jsx";
import Header from "../../components/Header2/Header.jsx";
import Link from "../../components/Link/Link.jsx";

const HomePage = () => {
  return (
    <>
      <Cloud />

      <div className="main-page">
        <div className="logo-div">
          <img src={logo} alt="logo" />
        </div>

        <Header />

        <Link />
      </div>
    </>
  );
};

export default HomePage;
