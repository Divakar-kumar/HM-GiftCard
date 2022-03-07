import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { slidesData } from "./mock";

const Carousel = ({ className, slidesData }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  return (
    <div className={className}>
      <div className={styles.sliderWrapper}>
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {slidesData.map((slide) => (
            <div className={styles.slickSlide} key={slide.id}>
              {/* <h2 className={styles.slickSlideTitle}>{slide.title}</h2> */}
              <Image
                src={slide.image} // Route of the image file
                height={271} // Desired size with correct aspect ratio
                width={430} // Desired size with correct aspect ratio
                alt="Card"
              />
              {/* <label className={styles.slickSlideLabel}>{slide.label}</label> */}
            </div>
          ))}
        </Slider>
        <div className={styles.thumbnailSliderWrap}>
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {slidesData.map((slide) => (
              <div className={styles.slickSlide} key={slide.id}>
                <Image
                  src={slide.image} // Route of the image file
                  height={47} // Desired size with correct aspect ratio
                  width={75} // Desired size with correct aspect ratio
                  alt="Card"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
