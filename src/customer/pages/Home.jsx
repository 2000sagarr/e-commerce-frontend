import React from "react";
import MainCarousel from "../components/homeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/homeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../Data/mens_kurta";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center">
        <HomeSectionCarousel data={mens_kurta} sectionnName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionnName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionnName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionnName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionnName={"Women's Dress"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
