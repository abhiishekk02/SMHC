import React from "react";
import { Carousel, Row, Col } from "antd";
import "./Showcase.css";
import Footer from "../Footer/Footer";
import SC1 from "../../Assets/SC1.jpg";
import SC2 from "../../Assets/SC2.jpg";

import SC3 from "../../Assets/SC3.jpg";

import SC4 from "../../Assets/SC4.jpg";

const Showcase = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1734197294272-71acf8e2ae79?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your actual image URLs
      alt: "Hero Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1704478146699-8fd57567000f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Hero Image 2",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1668613402936-98ce515c5cc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Hero Image 3",
    },
  ];

  const galleryImages = [
    {
      src: SC1,
      alt: "Gallery Image 1",
    },
    {
      src: SC2,
      alt: "Gallery Image 2",
    },
    {
      src: SC3,
      alt: "Gallery Image 3",
    },
    {
      src: SC4,
      alt: "Gallery Image 4",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1705883266860-81c76b274f3b?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Gallery Image 5",
    },
    {
      src: "https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Gallery Image 6",
    },
  ];

  return (
    <>
      <div className="showcase-container" style={{ padding: "40px 20px" }}>
        <h1 className="showcase-title">Showcase</h1>

        {/* Hero Carousel */}
        <Carousel autoplay>
          {images.map((image, index) => (
            <div key={index} className="hero-image">
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </div>
          ))}
        </Carousel>

        {/* Gallery Section */}
        <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
          {galleryImages.map((image, index) => (
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={8}
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Showcase;
