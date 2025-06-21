import React from "react";
import logo from "./../../assets/logo.png";
import "./homePage.css";
import Cloud from "../../components/Cloud/Cloud.jsx";
import Header from "../../components/Header/Header.jsx";
import Link from "../../components/Link/Link.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import sunImg1 from "../../../public/sun.jpg";
import sunImg2 from "../../../public/sun2.jpg";
import sunImg3 from "../../../public/sun3.jpg";
import PriceItem from "../../components/PriceItem/PriceItem.jsx";

const HomePage = () => {
  const slides = [
    <div
      style={{
        backgroundImage: `url(${sunImg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
      }}
    ></div>,
    <div
      style={{
        backgroundImage: `url(${sunImg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
      }}
    ></div>,
    <div
      style={{
        backgroundImage: `url(${sunImg3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
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

        <div className="block-img"></div>

        <div className="block-uslug">
          Наши услуги:
          <br />
          ‌Обучение Священному Корану и&nbsp;намазу
          <br />
          ‌- группы для&nbsp;девочек&nbsp;
          <br />
          -группы для&nbsp;мальчиков
          <br />
          ‌- группы для&nbsp;женщин
          <br />
          ‌Ранее развитие Монтесорри
          <br />
          ‌Дошкольная подготовка
          <br />
          ‌Продленка
          <br />
          ‌Репетиторство&nbsp;
          <br />
          ‌Мастер классы
          <br />
          ‌Домашний кинотеатр&nbsp;
          <br />
          ‌Праздники, аниматоры
          <br />‌<br />‌
        </div>

        <div className="block-break">
          <span>
            <svg
              role="none"
              data-mode="fill"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path>
            </svg>
          </span>
        </div>

        <div className="price-list-header">ПРАЙС ЛИСТ</div>

        <div className="price-list">
          <PriceItem title={"Обучение Корану"} price={"300₽"} />
          <PriceItem title={"Абонемент на месяц"} price={"3000₽"} />
          <PriceItem title={"Дошкольная подготовка"} price={"400₽"} />
          <PriceItem title={"Продленка"} price={"400₽"} />
          <PriceItem title={"Английский язык"} price={"500₽"} />
          <PriceItem title={"Праздник c аниматорами"} price={"200₽"} />
          <PriceItem title={"Домашний кинотеатр"} price={"100₽"} />
          <PriceItem title={"Мастер класс"} price={"500-800₽"} />
        </div>

        <hr className="hr-break" />
      </div>
    </>
  );
};

export default HomePage;
