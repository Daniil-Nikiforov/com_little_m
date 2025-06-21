import { useState, useRef, useEffect } from "react";
import "./Slider.css";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);

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
    if (currentIndex == 0) {
      allBtns[0].classList.add("active");
      allBtns[1].classList.remove("active");
      allBtns[2].classList.remove("active");
      setCurrentTranslate(currentIndex * -sliderRef.current.offsetWidth);
    } else if (currentIndex == 1) {
      allBtns[1].classList.add("active");
      allBtns[0].classList.remove("active");
      allBtns[2].classList.remove("active");
      setCurrentTranslate(currentIndex * -sliderRef.current.offsetWidth);
    } else {
      allBtns[2].classList.add("active");
      allBtns[0].classList.remove("active");
      allBtns[1].classList.remove("active");
      setCurrentTranslate(currentIndex * -sliderRef.current.offsetWidth);
    }
    setCurrentTranslate(currentIndex * -sliderRef.current?.offsetWidth);
  }, [currentIndex]);

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
            <div key={index} className="slide">
              {item}
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

            console.log(currentIndex);
          }
        }}
      >
        <button data-id={0} className="slider-btn active"></button>
        <button data-id={1} className="slider-btn"></button>
        <button data-id={2} className="slider-btn"></button>
      </div>
    </div>
  );
};

export default Slider;
