import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  // const navigation = useNavi

  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      onClick={() => {}}
      src={item.image}
      alt=""
      role="presentation"
    />
  ));
  return (
    <AliceCarousel
      animationType="slide"
      animationDuration={800}
      disableButtonsControls
      infinite
      autoPlay
      autoPlayInterval={2000}
      items={items}
    />
  );
};

export default MainCarousel;
