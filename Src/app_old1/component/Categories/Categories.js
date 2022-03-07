import React, { useState } from "react";
import cn from "classnames";
import styles from "./Categories.module.css";
import HMButton from "../Button/Button";
import { slidesData } from "../Carousel/mock";

const originalData = slidesData;
const Categories = ({ onClick }) => {
  const [category, setCategoryType] = useState("All");

  const handleCategory = (type) => {
    switch (type) {
      case "All":
        setCategoryType("All");
        onClick(originalData);
        break;
      case "occassion":
        setCategoryType("occassion");
        const filtereData = slidesData.filter(
          (data) => data.occassion !== "All"
        );
        onClick(filtereData);
        break;
      case "recipient":
        setCategoryType("recipient");
        break;
      case "coorporate":
        setCategoryType("coorporate");
        break;
      default:
        break;
    }
  };

  return (
    <div className={cn(styles.optionButtonGroup, styles.categoryButtons)}>
      <HMButton
        className={cn(
          styles.buttonContainer,
          category === "All" ? styles.button : ""
        )}
        text="All"
        onClick={() => handleCategory("All")}
      ></HMButton>
      <HMButton
        className={cn(
          styles.buttonContainer,
          category === "occassion" ? styles.button : ""
        )}
        text="Occassion"
        onClick={() => handleCategory("occassion")}
      ></HMButton>
      <HMButton
        className={cn(
          styles.buttonContainer,
          category === "recipient" ? styles.button : ""
        )}
        text="Recipient"
        onClick={() => handleCategory("recipient")}
      ></HMButton>
      <HMButton
        className={cn(
          styles.buttonContainer,
          category === "coorporate" ? styles.button : ""
        )}
        text="Coorporate Bulk"
        onClick={() => handleCategory("coorporate")}
      ></HMButton>
    </div>
  );
};

export default Categories;
