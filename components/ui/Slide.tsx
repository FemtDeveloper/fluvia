import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
// import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

const Slide = () => {
  return (
    <Splide
      aria-label="My Favorite Images"
      hasTrack={false}
      tag="header"
      options={{
        type: "loop",
        focus: "center",
        rewind: false,
        perPage: 1,
        autoplay: true,
        speed: 300,
        omitEnd: true,
      }}
    >
      <SplideTrack>
        <SplideSlide style={{ display: "block", position: "relative" }}>
          <Image
            src="/rio3.jpg"
            alt="Image 1"
            // width={100}
            // height={300}
            fill
          />
        </SplideSlide>
        <SplideSlide>
          <Image src="/rio2.jpg" alt="Image 2" width={1000} height={300} />
        </SplideSlide>
        <SplideSlide>
          <Image src="/rio4.jpg" alt="Image 2" width={1000} height={300} />
        </SplideSlide>
      </SplideTrack>

      <div className="splide__progress">
        <div className="splide__progress__bar" />
      </div>
    </Splide>
  );
};

export default Slide;
