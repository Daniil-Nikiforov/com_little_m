import React from "react";
import "./Bus.css";
import zahra from "/public/zahra3.jpg";
import LinkWhite from "../../components/LinkWhite/LinkWhite";
import Tab from "../../components/Tab/Tab";
import Slider from "../../components/Slider/Slider";
import slide1 from "/public/slider1.jpg";
import slide2 from "/public/slider2.jpg";
import slide3 from "/public/slider3.jpg";
import slide4 from "/public/slider4.jpg";
import slide2_1 from "/public/slider2_1.png";
import slide2_2 from "/public/slider2_2.jpg";
import slide2_3 from "/public/slider2_3.jpg";
import YouTubePlayer from "../../components/YouTubePlayer/YouTubePlayer";
import Slider2 from "../../components/Slider2/Slider2";
import map from "/public/map.png";
import Map from "../../components/Map/Map";

function Bus() {
  const links = [
    {
      href: "https://lr-k.ru/",
      h: "КОЛЕСО ХОРОШЕГО САМОЧУВСТВИЯ",
      p: "Оценка здоровья",
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
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M10 16.5l2-3 2 3m-2-3v-2l3-1m-6 0l3 1"></path>
          <circle cx="12" cy="7.5" r=".5" fill="#000"></circle>
        </svg>
      ),
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
  ];
  const links2 = [
    {
      href: "https://startracklr.com/start/",
      h: "ВАРИАНТЫ СТАРТА",
      p: "Как можно стартовать",
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
          <path d="M4 9h8V5.414a1 1 0 0 1 1.707-.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586A1 1 0 0 1 12 18.586V15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"></path>
        </svg>
      ),
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
    {
      href: "http://dohodvlr.ru/",
      h: "КАК ЗАРАБОТАТЬ",
      p: "Хочу узнать",
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
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1"></path>
          <path d="M12 6v2m0 8v2"></path>
        </svg>
      ),
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
  ];
  const tabs = [
    {
      id: 0,
      mainText: "Как заказать?",
      collapsedText:
        "Заказ осуществляется через официантский компании, то есть через онлайн магазин. Никуда идти не нужно.",
      collapse: true,
    },
    {
      id: 1,
      mainText: "А как забрать свой заказ?",
      collapsedText:
        "Курьер привезет вашу посылку и передаст вам лично в руки, в течение недели после оформления заказа.",
      collapse: true,
    },
    {
      id: 2,
      mainText: "Что делать чтобы заказать?",
      collapsedText: "Обратиться ко мне. Мои контакты тут указаны",
      collapse: true,
    },
  ];
  const links3 = [
    {
      href: "https://shop.lrworld.ru/",
      h: "МОЙ МАГАЗИН",
      p: "Онлайн",
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
          <path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4"></path>
          <path d="M5 21V10.85M19 21V10.85M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"></path>
        </svg>
      ),
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
    {
      href: "https://shop.lrworld.ru/login/?register=yes&referal_id=346021",
      h: "ОФОРМИТЬ ЗАКАЗ",
      p: "Самостоятельно",
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
          <path d="M9 11l3 3 8-8"></path>
          <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"></path>
        </svg>
      ),
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
  ];
  const slides = [
    <div
      style={{
        backgroundImage: `url(${slide1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
      }}
    ></div>,
    <div
      style={{
        backgroundImage: `url(${slide2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
      }}
    ></div>,
    <div
      style={{
        backgroundImage: `url(${slide3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
      }}
    ></div>,
    <div
      style={{
        backgroundImage: `url(${slide4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
      }}
    ></div>,
  ];
  const links4 = [
    {
      href: "tel:+79882646806",
      h: "ПОЗВОНИТЬ",
      p: "Позвонить",
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
    {
      href: "https://wa.me/79882646806",
      h: "НАПИСАТЬ",
      p: "WhatsApp",
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
    {
      href: "https://t.me/Zahramamochka",
      h: "НАПИСАТЬ",
      p: "Telegram",
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
    {
      href: "https://t.me/joinchat/T0RTPQjb8BMsRTPk",
      h: "КАНАЛ В ТЕЛЕГРАМ",
      p: "Telegram",
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
  ];
  const slides2 = [
    <div
      style={{
        backgroundImage: `url(${slide2_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
      }}
    ></div>,
    <div
      style={{
        backgroundImage: `url(${slide2_2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
      }}
    ></div>,
    <div
      style={{
        backgroundImage: `url(${slide2_3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
      }}
    ></div>,
  ];
  const links5 = [
    {
      href: "https://vk.com/lr_zahra",
      h: "ВК",
      bg: "#0077FF",
      c: "#FFF",
      font: "'Roboto Slab',serif",
      svg: <i class="fa-brands fa-vk"></i>,
    },
    {
      href: "https://www.youtube.com/@lr_zahra",
      h: "YOUTUBE",
      bg: "#DB4141",
      c: "#FFF",
      font: "'Roboto Slab',serif",
      svg: <i class="fa-brands fa-square-youtube"></i>,
    },
    {
      href: "https://tiktok.com/@zahramamochka.lr",
      h: "TIKTOK",
      bg: "#000",
      c: "#FFF",
      font: "'Roboto Slab',serif",
      svg: <i class="fa-brands fa-tiktok"></i>,
    },
    {
      href: "https://instagram.com/lr_zahra_/",
      h: "INSTAGRAM",
      bg: "#F00075",
      c: "#FFF",
      font: "'Roboto Slab',serif",
      svg: <i class="fa-brands fa-instagram"></i>,
    },
    {
      href: "http://lr_zahra/",
      h: "MOMLIFE",
      bg: "#F7670733",
      c: "#343A40",
      p: "Загра Амирханова",
      font: "'Roboto Slab',serif",
    },
  ];
  return (
    <>
      <div className="main-page3">
        <header className="header3">
          <div
            className="text-block3-header"
            style={{
              alignSelf: "flex-start",
              marginTop: "1rem",
              fontFamily: "'Caveat', cursive",
              fontSize: "20px",
              color: "#495057",
            }}
          >
            «Мы то, что мы едим»
          </div>
          <div className="img-div3">
            <div
              className="text-name3"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "17px",
                color: "#495057",
                fontWeight: "700",
                marginBottom: "1rem",
                marginTop: "-0.05rem",
              }}
            >
              Загра Амирханова
              <br /> Эксперт по красоте и здоровью
            </div>
            <img src={zahra} alt="zahra3" />
            <div
              className="text-name3"
              style={{
                fontFamily: "'Lobster', cursive",
                fontSize: "20px",
                color: "#495057",
                marginBottom: "1rem",
              }}
            >
              ‌Помогу стать здоровее <br /> ‌Научу получать доход от 22 тыс и
              выше
            </div>
          </div>
        </header>

        <div
          className="hr-svg-hr"
          style={{
            gridTemplateColumns: "75px 17px 75px",
            justifyContent: "center",
            marginBottom: "2rem",
            gap: "10px",
          }}
        >
          <div className="hr3"></div>
          <div className="svg3">
            <svg
              style={{
                fill: "#fff",
                color: "#495057",
                stroke: "#495057",
              }}
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
              <path d="M3 12h4l3 8 4-16 3 8h4"></path>
            </svg>
          </div>
          <div className="hr3"></div>
        </div>

        <div
          className="text-block3"
          style={{
            alignSelf: "center",
            fontFamily: "'Caveat', cursive",
            fontSize: "24px",
            fontWeight: "700",
            color: "#000",
            marginBottom: "0.3rem",
          }}
        >
          ХОЧУ ПРОВЕРИТЬ СВОЁ ЗДОРОВЬЕ
        </div>

        <div className="btns-flex2">
          {links.map((item, index) => (
            <LinkWhite key={index} {...item} />
          ))}
        </div>

        <div className="hr-svg-hr">
          <div className="hr3"></div>
          <div className="svg3">
            <svg
              role="none"
              data-mode="fill"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 64 256 412"
            >
              <path d="M119.5 262.9L3.5 145.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 223.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 263c-4.7 4.6-12.3 4.6-17-.1zm17 128l116-117.8c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L128 351.3 27.6 249.1c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l116 117.8c4.7 4.6 12.3 4.6 17-.1z"></path>
            </svg>
          </div>
          <div className="hr3"></div>
        </div>

        <div
          className="text-block3"
          style={{
            alignSelf: "center",
            fontFamily: "'Caveat', cursive",
            fontSize: "20px",
            color: "#495057",
            marginBottom: "0.5rem",
          }}
        >
          ЧТО Я МОГУ ПОЛУЧИТЬ
        </div>

        <div className="btns-flex2">
          {links2.map((item, index) => (
            <LinkWhite key={index} {...item} />
          ))}
        </div>

        <div
          className="tabs-div-flex"
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          {tabs.map((item) => (
            <Tab props={item} />
          ))}
        </div>

        <div className="btns-flex2">
          {links3.map((item, index) => (
            <LinkWhite key={index} {...item} />
          ))}
        </div>

        <div
          className="text-block3"
          style={{
            alignSelf: "center",
            fontFamily: "'Impact', sans-serif",
            fontSize: "17px",
            color: "#495057",
            marginBottom: "2rem",
            marginTop: "1rem",
          }}
        >
          Командные поездки
        </div>

        <Slider
          items={slides}
          text={[
            "Обучения, семинары, поездки",
            "Поездки вдохновляют",
            "Дагестан, с. Гуниб. Крепость Имама Шамиля",
          ]}
          text2={[
            "Совмещаем приятное с полезным",
            "А еще — мотивируют и окрыляют",
            "Путешествуя также изучаем историю.",
          ]}
          id={0}
        />

        <div
          className="youTube-block3"
          style={{
            width: "100%",
            marginTop: "-1.5rem",
          }}
        >
          <YouTubePlayer videoId="H7-sJXKX9xY" />
        </div>

        <div
          className="hr-svg-hr"
          style={{
            gridTemplateColumns: "75px 17px 75px",
            justifyContent: "center",
            marginBottom: "2rem",
            gap: "10px",
          }}
        >
          <div className="hr3"></div>
          <div className="svg3">
            <svg
              style={{
                fill: "#fff",
                color: "#495057",
                stroke: "#495057",
              }}
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
              <path d="M3 12h4l3 8 4-16 3 8h4"></path>
            </svg>
          </div>
          <div className="hr3"></div>
        </div>

        <div
          className="text-block3"
          style={{
            alignSelf: "center",
            fontFamily: "'Caveat', cursive",
            fontSize: "20px",
            color: "#495057",
            fontWeight: "700",
            marginBottom: "2rem",
            marginTop: "-0.5rem",
          }}
        >
          ЕСТЬ ВОПРОСЫ?
        </div>

        <div
          className="text-block3"
          style={{
            alignSelf: "center",
            fontFamily: "'Caveat', cursive",
            fontSize: "20px",
            color: "#000",
            fontWeight: "700",
            marginBottom: "2rem",
            marginTop: "-1rem",
          }}
        >
          ВЫБИРАЙ УДОБНЫЙ СПОСОБ СВЯЗИ
        </div>

        <div
          className="btns-flex2"
          style={{
            marginTop: "-1rem",
          }}
        >
          {links4.map((item, index) => (
            <LinkWhite key={index} {...item} />
          ))}
        </div>

        <div
          className="text-block3"
          style={{
            alignSelf: "center",
            fontFamily: "'Impact', sans-serif",
            fontSize: "17px",
            color: "#495057",
            marginBottom: "1.5rem",
            marginTop: "1rem",
          }}
        >
          Автопрограмма ЛР
        </div>

        <div
          className="youTube-block3"
          style={{
            width: "100%",
            marginTop: "-1.5rem",
          }}
        >
          <YouTubePlayer videoId="UwKJqAV5quI" />
        </div>

        <div
          className="div-slider2-flex"
          style={{
            width: "100%",
            marginTop: "2rem",
          }}
        >
          <Slider2 items={slides2} />
        </div>

        <div
          className="text-block3"
          style={{
            alignSelf: "center",
            fontFamily: "'Serif', serif",
            fontSize: "17px",
            color: "#495057",
            marginBottom: "1.5rem",
            marginTop: "-0.5rem",
          }}
        >
          Адрес
        </div>

        <div className="map-container">
          <Map />
        </div>

        <div
          className="hr-svg-hr"
          style={{
            marginTop: "-0.5rem",
          }}
        >
          <div className="hr3"></div>
          <div className="svg3">
            <svg
              style={{
                fill: "none",
              }}
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
              <circle cx="12" cy="12" r="9"></circle>
            </svg>
          </div>
          <div className="hr3"></div>
        </div>

        <div
          className="text-block3"
          style={{
            alignSelf: "center",
            fontFamily: "'Caveat', cursive",
            fontSize: "20px",
            color: "#000",
            fontWeight: "700",
            marginBottom: "0.5rem",
          }}
        >
          НАЙТИ МЕНЯ В СОЦСЕТЯХ
        </div>

        <div className="btns-flex2">
          {links5.map((item, index) => (
            <LinkWhite key={index} {...item} />
          ))}
        </div>

        <div
          className="hr-svg-hr"
          style={{
            marginTop: "1rem",
            marginBottom: "3rem",
          }}
        >
          <div className="hr3"></div>
          <div className="svg3">
            <svg
              style={{
                fill: "none",
              }}
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
              <path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z"></path>
            </svg>
          </div>
          <div className="hr3"></div>
        </div>
      </div>
    </>
  );
}

export default Bus;
