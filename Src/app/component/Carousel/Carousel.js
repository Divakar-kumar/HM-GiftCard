import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import { slidesData } from "../Carousel/mock";

import Slider from "react-slick";
import { FormContext } from "../../appState";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ className, slidesData }) => {
  const [imageData, setImageData] = useState(slidesData[0].imageUrl);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const { setCardImageDetails } = useContext(FormContext);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  useEffect(() => {
    setCardImageDetails(imageData);
  }, [imageData]);

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

  const handleAfterChange = (event) => {
    const filteredData = slidesData.filter((data) => data.id === event);
    setImageData(filteredData[0].imageUrl);
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
              <Image
                src={slide.image} // Route of the image file
                height={271} // Desired size with correct aspect ratio
                width={430} // Desired size with correct aspect ratio
                alt="Card"
              />
            </div>
          ))}
        </Slider>
        <div className={styles.thumbnailSliderWrap}>
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
            afterChange={handleAfterChange}
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
