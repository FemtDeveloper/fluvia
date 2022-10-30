import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
// import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

const Slider = () => {
  return (
    <div>
      <Slide autoplay duration={2500}>
        <div
          className="each-slide-effect"
          style={{
            position: "relative",
            width: "100%",
            height: "350px",
            margin: "0 auto",
          }}
        >
          <Image src="/rio3.jpg" alt="Image 1" fill />
        </div>
        <div
          className="each-slide-effect"
          style={{
            position: "relative",
            width: "100%",
            height: "350px",
            margin: "0 auto",
          }}
        >
          <Image src="/rio2.jpg" alt="Image 2" fill />
        </div>
        <div
          className="each-slide-effect"
          style={{
            position: "relative",
            width: "100%",
            height: "350px",
            margin: "0 auto",
          }}
        >
          <Image src="/rio4.jpg" alt="Image 2" fill />
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
