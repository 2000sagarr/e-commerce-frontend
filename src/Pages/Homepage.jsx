import React from "react";
import TitlebarBelowMasonryImageList from "../customer/Components/Home/TitlebarBelowMasonryImageList";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
const headingStyle = {
  fontSize: '1.5rem',
  marginBottom: '15px',
  color: '#333',
  textAlign: 'center',
  marginTop: "15px",
};
const Homepage = () => {
  return (
    <div className="">
      <HomeCarousel />
      <h2 style={headingStyle}>Shop by Category</h2>

      <div className="ml-10 mr-10 mt-10">
        
        <TitlebarBelowMasonryImageList />
      </div>

      {/* <div className="space-y-10 py-20">
        <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection data={mensShoesPage1} section={"Men's Shirts"} />
        <HomeProductSection data={dressPage1} section={"Dress"} />
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
      </div> */}
    </div>
  );
};

export default Homepage;
