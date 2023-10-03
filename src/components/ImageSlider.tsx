import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./ImageSlider.css";

interface ImageSliderProps {
  imageURLs: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageURLs }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function showNextImg() {
    setActiveImageIndex((index) => {
      if (index === imageURLs.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImg() {
    setActiveImageIndex((index) => {
      if (index === 0) return imageURLs.length - 1;
      return index - 1;
    });
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        src={imageURLs[activeImageIndex]}
        alt="Mode"
        className="img-slider-img"
      />
      <button
        onClick={showPrevImg}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        onClick={showNextImg}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default ImageSlider;
