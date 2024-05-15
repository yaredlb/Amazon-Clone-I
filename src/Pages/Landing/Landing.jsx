import React from "react";
import CarouselEffect from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import LayOut from "../../Components/LayOut/LayOut";
import Footer from "../../Components/Footer/Footer";

const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
      {/* <Footer /> */}
    </LayOut>
  );
};

export default Landing;
