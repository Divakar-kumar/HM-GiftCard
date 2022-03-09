import React, { useState } from "react";
import cn from "classnames";
import { slidesData } from "../component/Carousel/mock";
import ImageUpload from "../component/ImageUpload/ImageUpload";
import Carousel from "../component/Carousel/Carousel";
import styles from "./Step1.module.css";
import HMButton from "../component/Button/Button";
import Categories from "../component/Categories/Categories";

const Step1 = () => {
  const [categoryData, setCategoryData] = useState(slidesData);
  const [choice, setChoice] = useState(1);

  const handleChoice = (value) => {
    setChoice(value);
  };

  const handleCategory = (data) => {
    setCategoryData(data);
  };

  return (
    <>
      <section className={styles.spacing}>
        <div className={styles.optionButtonGroup}>
          <HMButton
            className={cn(
              styles.buttonContainer,
              choice === 1 ? styles.button : ""
            )}
            text="Choose a design"
            onClick={() => handleChoice(1)}
          ></HMButton>
          <HMButton
            className={cn(
              styles.buttonContainer,
              choice === 2 ? styles.button : ""
            )}
            text="Upload custom image"
            onClick={() => handleChoice(2)}
          ></HMButton>
        </div>
      </section>
      <section className={styles.spacing}>
        {choice === 1 && <Categories onClick={handleCategory}></Categories>}
        {categoryData?.length && choice === 1 && (
          <Carousel
            className={styles.carouselWrapper}
            slidesData={categoryData}
          ></Carousel>
        )}
        {choice === 2 && (
          <div>
            <h1>Custom Card Image</h1>
            <div className={styles.imageUploadContainer}>
              <ImageUpload />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Step1;
