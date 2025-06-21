import React from "react";
import logo from "./../../assets/logo.png";
import "./homePage.css";
import Cloud from "../../components/Cloud/Cloud.jsx";
import Header from "../../components/Header/Header.jsx";
import Link from "../../components/Link/Link.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import sunImg from "../../../public/sun.jpg";

const HomePage = () => {
  const slides = [
    <div
      style={{
        backgroundImage: sunImg,
        backgroundSize: "100%",
        height: "800px",
        width: "90%",
      }}
    ></div>,
    <div
      style={{
        background: sunImg,
        height: "800px",
        width: "90%",
      }}
    ></div>,
    <div
      style={{
        background: sunImg,
        height: "800px",
        width: "90%",
      }}
    ></div>,
  ];
  return (
    <>
      <Cloud />

      <div className="main-page">
        <div className="logo-div">
          <img src={logo} alt="logo" />
        </div>

        <Header />

        <Link />

        <div className="slider">
          <Slider items={slides} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
