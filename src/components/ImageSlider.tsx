import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { VscCircleFilled, VscCircle } from "react-icons/vsc";
import "./ImageSlider.css";

interface ImageSliderProps {
  images: { url: string; alt: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function showNextImg() {
    setActiveImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImg() {
    setActiveImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  console.log("hello world");

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            aria-hidden={activeImageIndex !== index}
            key={url}
            src={url}
            alt={alt}
            className="img-slider-img"
            style={{ translate: `${-100 * activeImageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImg}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View previous image"
      >
        <AiOutlineArrowLeft aria-hidden />
      </button>
      <button
        onClick={showNextImg}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View next image"
      >
        <AiOutlineArrowRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            className="img-slider-dot-btn"
            onClick={() => setActiveImageIndex(index)}
            key={index}
            aria-label={`View image ${index + 1}`}
          >
            {index === activeImageIndex ? (
              <VscCircleFilled aria-hidden />
            ) : (
              <VscCircle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
};

export default ImageSlider;
