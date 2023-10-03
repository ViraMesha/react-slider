import { mode1, mode2, mode3, mode4, mode5 } from "./assets/images";
import "./App.css";
import ImageSlider from "./components/ImageSlider";

const IMAGES = [mode1, mode2, mode3, mode4, mode5];

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "700px",
      }}
    >
      <ImageSlider imageURLs={IMAGES} />
    </div>
  );
}

export default App;
