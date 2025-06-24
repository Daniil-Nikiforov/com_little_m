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
import LinkWhite from "../../components/LinkWhite/LinkWhite.jsx";
import Map from "../../components/Map/Map.jsx";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import YouTubePlayer from "../../components/YouTubePlayer/YouTubePlayer.jsx";

const HomePage = () => {
  const svgB = (
    <svg
      role="none"
      data-mode="stroke"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="#000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <ellipse cx="16" cy="6" rx="5" ry="3"></ellipse>
      <path d="M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6"></path>
      <path d="M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4"></path>
      <path d="M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3m2 0v1m0-8v1"></path>
    </svg>
  );
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
  const links = [
    {
      href: "https://wa.me/message/ORBUWQL5KSNRP1",
      h: "ЕСТЬ ВОПРОС?",
      p: "Задавай",
      svg: (
        <svg
          role="none"
          data-mode="stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 20l1.3-3.9A9 8 0 1 1 7.7 19L3 20"></path>
          <path d="M8 13l3-2 2 2 3-2"></path>
        </svg>
      ),
    },
    {
      href: "https://wa.me/message/ORBUWQL5KSNRP1",
      h: "ЗАПИСАТЬСЯ",
      p: "Задать вопрос",
      svg: (
        <svg
          role="none"
          data-mode="stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
        </svg>
      ),
    },
    {
      href: "https://t.me/little_muslimss",
      h: "ТЕЛЕГРАММ КАНАЛ",
      p: "Посмотреть",
      svg: (
        <svg
          role="none"
          data-mode="stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4"></path>
        </svg>
      ),
    },
    {
      href: "https://www.youtube.com/@littlemuslims2023",
      h: "НАШ ЮТУБ КАНАЛ",
      p: "Посмотреть",
      svg: (
        <svg
          role="none"
          data-mode="stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            rx="4"
          ></rect>
          <path d="M10 9l5 3-5 3z"></path>
        </svg>
      ),
    },
    {
      href: "https://instagram.com/little_muslims_?igshid=MzRlODBiNWFlZA==",
      h: "НАШ ИНСТАГРАМ",
      p: "Посмотреть",
      svg: (
        <svg
          role="none"
          data-mode="stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            rx="4"
          ></rect>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M16.5 7.5v.001"></path>
        </svg>
      ),
    },
    {
      href: "https://vk.com/lr_zahra",
      h: "ВК",
      p: "Посмотреть",
      svg: (
        <svg
          role="none"
          data-mode="stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M10 6h2v12c-4.5-1-8-6.5-9-12"></path>
          <path d="M20 6c-1 2-3 5-5 6h-3m8 6c-1-2-3-5-5-6"></path>
        </svg>
      ),
    },
    {
      href: "https://preggieapp.page.link/TJnxiuqYkz8s7fze9",
      h: "MOMLIFE",
      p: "Прегги",
      svg: (
        <svg
          role="none"
          data-mode="stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 8c2.648 0 5.028.826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59-4.03 6.5-9 6.5-4.875 0-8.845-2.8-9-6.294l-1-.206a2.5 2.5 0 0 1 2.326-4.36C5.973 8.827 8.353 8 11.001 8z"></path>
          <path d="M12 8l1-5 6 1"></path>
          <circle cx="19" cy="4" r="1"></circle>
          <g fill="#000">
            <circle cx="9" cy="13" r=".5"></circle>
            <circle cx="15" cy="13" r=".5"></circle>
          </g>
          <path d="M10 17c.667.333 1.333.5 2 .5s1.333-.167 2-.5"></path>
        </svg>
      ),
    },
  ];
  const linkMap = {
    icon: <i class="fa fa-map-marker" aria-hidden="true"></i>,
  };
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

        <div className="Want-to-us-text">Хочешь записаться к нам? Пиши</div>
        <div className="links-flex">
          {links.map((item, index) => (
            <LinkWhite key={index} {...item} />
          ))}
        </div>

        <div className="our-place-text">
          <div className="svg-place-div">
            <svg
              role="none"
              data-mode="stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="#000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M8 16l2-6 6-2-2 6-6 2"></path>
              <circle cx="12" cy="12" r="9"></circle>
            </svg>
          </div>

          <div className="text-place-div">
            <div className="text-place-header">МЫ НАХОДИМСЯ</div>
            <div className="flex-div-p">
              <div className="text-place-p">
                Махачкала, Турали, Кузнечная 45 (рядом с МДОУ 36)
              </div>
              <div className="text-place-p2">Проезд маршрута 12А</div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <Map />
        </div>

        <LinkWhite
          icon={<i class="fa fai fa-map-marker-alt"></i>}
          h="КУЗНЕЧНАЯ 45"
          href="https://maps.google.com/?q=45.0359737,38.9822636&z=18"
        />

        <YouTubePlayer videoId="g8hsdMxS7mY" />

        <div className="link-white-div">
          <LinkWhite
            svg={svgB}
            h="БИЗНЕС"
            p="Дополнительный заработок"
            href="/business_woman"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
