import { useState, useRef, useEffect, createElement } from "react";
import "./Slider.css";

const Slider = ({ items, text, text2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    createBtns(items.length);
  }, []);

  // Обработчики событий для мыши
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
    setPrevTranslate(currentTranslate);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.clientX;
    const diff = currentPosition - startPos;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentTranslate(currentIndex * -sliderRef.current.offsetWidth);
    } else if (movedBy > 100 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentTranslate(currentIndex * -sliderRef.current.offsetWidth);
    }

    setCurrentTranslate(currentIndex * -sliderRef.current.offsetWidth);
  };

  // Обработчики событий для тач-устройств
  const handleTouchStart = (e) => {
    handleMouseDown(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    handleMouseMove(e.touches[0]);
  };

  // Эффект для установки позиции слайдера
  useEffect(() => {
    const sliderWidth = sliderRef.current?.offsetWidth || 0;
    setCurrentTranslate(currentIndex * -sliderWidth);

    let allBtns = document.querySelectorAll(".slider-btn");
    allBtns.forEach((item) => {
      item.className = "slider-btn";
    });
    allBtns[currentIndex].classList.add("active");

    setCurrentTranslate(currentIndex * -sliderRef.current?.offsetWidth);
  }, [currentIndex]);

  function createBtns(len) {
    let btns = document.querySelector(".btns");

    for (let index = 0; index < len; index++) {
      let element = document.createElement("button");
      element.className = "slider-btn";
      element.setAttribute("data-id", index);
      if (index == 0) {
        element.classList.add("active");
      }
      btns.appendChild(element);
    }
  }

  return (
    <div className="wrapper">
      <div className="slider-container">
        <div
          ref={sliderRef}
          className={`slider ${isDragging ? "grabbing" : ""}`}
          style={{ transform: `translateX(${currentTranslate}px)` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {items.map((item, index) => (
            <div key={index} className={`${text ? "slide" : "slide2"}`}>
              {item}
              {text && (
                <div className="slider-text-block-flex">
                  <div className="slider-text-block">{text[index]}</div>
                  <div className="slider-text-block2">{text2[index]}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="btns"
        onClick={function handleSliderBtn(e) {
          if (e.target.tagName == "BUTTON") {
            let allBtns = document.querySelectorAll(".slider-btn");
            allBtns.forEach((item) => {
              item.classList.remove("active");
            });

            let currentSlide = e.target;

            setCurrentIndex(Number(currentSlide.getAttribute("data-id")));

            allBtns = null;
            currentSlide.classList.add("active");
          }
        }}
      ></div>
    </div>
  );
};

export default Slider;
