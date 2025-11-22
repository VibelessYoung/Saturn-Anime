import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";

function HeroSlider() {
  return (
    <Swiper
      modules={[EffectCoverflow, Autoplay]}
      effect="coverflow"
      autoplay={{ delay: 3000 }}
      loop={true}
      speed={900}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      <SwiperSlide>
        <HeroSection1 />
      </SwiperSlide>

      <SwiperSlide>
        <HeroSection2 />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;
