import { img1, img2, img3, img4, img5, img6 } from "./assets/images";
import "./App.css";
import ImageSlider from "./components/ImageSlider";

const IMAGES = [
  {
    url: img1,
    alt: "a street with a store front and a car parked under a bridge",
  },
  { url: img2, alt: "aerial view of a snowy forest" },
  { url: img3, alt: "a person standing in front of a rocky mountain" },
  { url: img4, alt: "a person running on a rocky trail" },
  { url: img5, alt: "a lighthouse on a rock in the ocean" },
  {
    url: img6,
    alt: "a colorful rock formations with a person standing in the middle",
  },
];

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "600px",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
    </div>
  );
}

export default App;
