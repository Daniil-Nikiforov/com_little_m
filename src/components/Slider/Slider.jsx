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
    } else if (movedBy > 100 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
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
  }, [currentIndex]);

  return (
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
  );
};

export default Slider;
