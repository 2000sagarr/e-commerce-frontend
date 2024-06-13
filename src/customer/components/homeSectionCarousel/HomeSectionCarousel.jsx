import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
// import { mens_kurta } from "../../../Data/mens_kurta";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({ data, sectionnName }) => {
  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  // Custom previous button
  const renderPrevButton = ({ isDisabled }) => {
    return (
      <button
        className={`alice-carousel__prev-btn ${isDisabled ? "disabled" : ""}`}
        style={{ background: "none", border: "none" }}
      >
        <KeyboardArrowLeftIcon sx={{ fontSize: 36 }} />
      </button>
    );
  };

  // Custom next button
  const renderNextButton = ({ isDisabled }) => {
    return (
      <button
        className={`alice-carousel__next-btn ${isDisabled ? "disabled" : ""}`}
        style={{ background: "none", border: "none" }}
      >
        <KeyboardArrowRightIcon sx={{ fontSize: 36 }} />
      </button>
    );
  };

  return (
    <div className="relative px-4 lg:px-8 sm:px-2">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5 ml-5">
        {sectionnName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          disableDotsControls
          infinite
          items={items}
          responsive={{
            0: { items: 2 },
            720: { items: 3 },
            1024: { items: 6 },
          }}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
