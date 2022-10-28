import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
// import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

const Slider = () => {
  return (
    <Slide autoplay duration={2500}>
      <div className="each-slide-effect">
        <Image src="/rio3.jpg" alt="Image 1" width={1200} height={300} />
      </div>
      <div className="each-slide-effect">
        <Image src="/rio2.jpg" alt="Image 2" width={1200} height={300} />
      </div>
      <div className="each-slide-effect">
        <Image src="/rio4.jpg" alt="Image 2" width={1200} height={300} />
      </div>
    </Slide>
  );
};

export default Slider;
