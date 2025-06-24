import React from "react";
import "./Zahra.css";
import zahra from "/public/zahra.jpg";
import back from "/public/back.jpg";
import image3 from "/public/image3.jpg";
import Slider from "../../components/Slider/Slider";
import sunImg1 from "/public/sun.jpg";
import sunImg2 from "/public/sun2.jpg";
import sunImg3 from "/public/sun3.jpg";
import Tab from "../../components/Tab/Tab";
import PriceItem from "../../components/PriceItem/PriceItem";
import PriceItem2 from "../../components/PriceItem2/PriceItem";
import LinkWhite from "../../components/LinkWhite/LinkWhite";
import YouTubePlayer from "../../components/YouTubePlayer/YouTubePlayer";

function Zahra() {
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
  const tabs = [
    {
      id: 0,
      mainText: "Для кого обучение?",
      collapsedText: "Только для женского пола!",
      collapse: true,
    },
    {
      id: 1,
      mainText: "Сколько длится одно обучение?",
      collapsedText: "Длительность индивидуального занятия 60 минут",
      collapse: true,
    },
    {
      id: 2,
      mainText: "Сколько стоит одно обучение?",
      collapsedText: "Цены указаны ниже в прайсе.",
      collapse: true,
    },
    {
      id: 3,
      mainText: "В какое время проходит обучение?",
      collapsedText:
        "Время обговаривается индивидуально, лично с каждой, в удобное для нас обеих время.",
      collapse: true,
    },
    {
      id: 4,
      mainText: "Как проходит обучение?",
      collapsedText:
        "Онлайн, по видеосвязи, я читаю книгу, перевожу, и объясняю тему.",
      collapse: true,
    },
  ];
  const links = [
    {
      href: "https://instagram.com/lr_zahra_/",
      h: "INSTAGRAM",
      svg: <i class="fa-brands fa-instagram"></i>,
      bg: "#F00075",
      c: "#fff",
      font: "'Roboto Slab',serif",
    },
    {
      href: "https://www.youtube.com/@Zahra28091989",
      h: "YOUTUBE",
      svg: <i class="fa-brands fa-square-youtube"></i>,
      bg: "#DB4141",
      c: "#fff",
      font: "'Roboto Slab',serif",
    },
    {
      href: "https://vk.com/lr_zahra",
      h: "ВК",
      svg: <i class="fa-brands fa-vk"></i>,
      bg: "#0077FF",
      c: "#fff",
      font: "'Roboto Slab',serif",
    },
  ];
  const links2 = [
    {
      href: "whatsapp://send?phone=79882646806&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%82%D1%8C%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%20%E2%80%A6",
      h: "НАПИСАТЬ",
      svg: <i class="fa-brands fa-whatsapp"></i>,
      bg: "#55CD6C",
      c: "#fff",
      font: "'Roboto Slab',serif",
    },
    {
      href: "tg://resolve?domain=Lr_Zahra",
      h: "TELEGRAM",
      svg: <i class="fa-brands fa-telegram"></i>,
      bg: "#61A8DE",
      c: "#fff",
      font: "'Roboto Slab',serif",
    },
  ];
  const links3 = [
    {
      href: "/",
      h: "МОЙ ДЕТСКИЙ ЦЕНТР",
      p: "Фотостудия",
      svg: <div className="bg-logo"></div>,
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
    {
      href: "https://taplink.cc/business_woman_lr_",
      h: "МОЙ БИЗНЕС",
      p: "Научу зарабатывать",
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
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
          <rect
            x="9"
            y="3"
            width="6"
            height="4"
            viewBox="0 0 6 4"
            rx="2"
          ></rect>
          <path d="M9 14l2 2 4-4"></path>
        </svg>
      ),
      bg: "#868E9633",
      c: "#343A40",
      font: "'Roboto Slab',serif",
    },
  ];
  return (
    <>
      <header className="header2">
        <div className="img-div2">
          <img src={zahra} alt="zahra2" />
          <div className="text-name2">Загра Амирханова</div>
        </div>
      </header>

      <div className="main-page2">
        <div className="image-fake-slider2">
          <img src={image3} alt="image3" />
        </div>

        <div className="text-blocks2-flex">
          <div className="text-block2">
            <div className="svg-div2">
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
                <path d="M3 19a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0 9 9 0 0 1 9 0"></path>
                <path d="M3 6v13m9-13v13m9-13v13"></path>
              </svg>
            </div>

            <div className="text-block2-text">
              <div className="text-block2-header">ОБРАЗОВАНИЕ</div>
              <div className="text-block2-p">
                <span>ВЫСШЕЕ ИСЛАМСКОЕ</span>
                СШ 34 (2005г)
                <br />
                ДИУ (2008г)
                <br />
                ГПК (2008−2010гг)
                <br />
                ИТиМО (ДГИ) (2014г)
                <br />
              </div>
            </div>
          </div>

          <div className="text-block2">
            <div className="svg-div2">
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
                <path d="M6 5h12l3 5-8.5 9.5a.7.7 0 0 1-1 0L3 10l3-5"></path>
                <path d="M10 12L8 9.8l.6-1"></path>
              </svg>
            </div>

            <div className="text-block2-text">
              <div className="text-block2-header">О СЕБЕ</div>
              <div className="text-block2-p">
                33 года,
                <br />
                Замужем, <br />
                Многодетная мамочка,
                <br />
                Преподаватель примечетских летних курсов для&nbsp;детей,
                <br />
                Преподаватель арабского в&nbsp;частном саду,
                <br />
                Менеджер немецкого бренда, <br />
                За&nbsp;здоровое питание.
                <br />
                <br />
              </div>
            </div>
          </div>

          <div className="text-block2">
            <div className="svg-div2">
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
                <path d="M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20"></path>
                <path
                  d="M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20"
                  transform="rotate(120 12 12)"
                ></path>
                <path
                  d="M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20"
                  transform="rotate(240 12 12)"
                ></path>
              </svg>
            </div>

            <div className="text-block2-text">
              <div className="text-block2-header">МОЕ ХОББИ</div>
              <div className="text-block2-p">
                Люблю вязать крючком, особенно игрушки.
              </div>
            </div>
          </div>
        </div>

        <div
          className="block-break"
          style={{
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <span>
            <svg
              style={{
                stroke: "#495057",
                color: "#495057",
                fill: "#f1f5f5",
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
              <path d="M8 12l4 4"></path>
              <path d="M12 8v8"></path>
              <path d="M16 12l-4 4"></path>
            </svg>
          </span>
        </div>

        <Slider items={slides} />

        <div className="tabs-div-flex">
          {tabs.map((item) => (
            <Tab props={item} />
          ))}
        </div>

        <div className="price-list-header2">
          Прайс <br />
          ‌Индивидуальные занятия
        </div>

        <div className="price-list">
          <PriceItem2 title={"Тасриф"} price={"1 000.00₽"} />
          <PriceItem2 title={"Фикх"} price={"1 000.00₽"} />
          <PriceItem2 title={"Арабский"} price={"1 000.00₽"} />
          <PriceItem2 title={"Грамматика (нахв)"} price={"1 000.00₽"} />
          <PriceItem2 title={"Коран"} price={"800₽"} />
        </div>

        <div className="text-block2-soc">Соцсети</div>

        <div className="btns-flex2">
          {links.map((item, index) => (
            <LinkWhite key={index} {...item} />
          ))}
        </div>

        <div
          className="block-break"
          style={{
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <span>
            <svg
              style={{
                stroke: "#495057",
                fill: "#fff",
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
              <path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4"></path>
            </svg>
          </span>
        </div>

        <div className="text-block2-soc">Контакты для связи</div>

        <div className="btns-flex2">
          {links2.map((item, index) => (
            <LinkWhite key={index} {...item} />
          ))}
        </div>

        <div
          className="block-break"
          style={{
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <span>
            <svg
              style={{
                fill: "#495057",
                stroke: "#495057",
                opacity: "1",
                color: "#495057",
              }}
              role="none"
              data-mode="fill"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 64 256 412"
            >
              <path d="M119.5 262.9L3.5 145.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 223.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 263c-4.7 4.6-12.3 4.6-17-.1zm17 128l116-117.8c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L128 351.3 27.6 249.1c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l116 117.8c4.7 4.6 12.3 4.6 17-.1z"></path>
            </svg>
          </span>
        </div>

        <div className="btns-flex2" style={{ marginTop: "-2rem" }}>
          {links3.map((item, index) => (
            <LinkWhite key={index} {...item} />
          ))}
        </div>

        <div className="youTube-div2">
          <YouTubePlayer videoId="Nno9MbZ5sJc" />
        </div>
      </div>
    </>
  );
}

export default Zahra;
