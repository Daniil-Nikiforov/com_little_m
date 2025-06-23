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
      </div>
    </>
  );
}

export default Zahra;
