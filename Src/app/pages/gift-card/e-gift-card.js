import Head from "next/head";
import React, { useState } from "react";
import cn from "classnames";

import HMButton from "../../component/Button/Button";
import styles from "./e-gift-card.module.css";
import Layout from "../../component/Layout/Layout";
import Carousel from "../../component/Carousel/Carousel";
import Categories from "../../component/Categories/Categories";
import Form from "../../component/Form/Form";
import EmailForm from "../../component/EmailForm/EmailForm";
import SmsForm from "../../component/SmsForm/SmsForm";
import SelfDeliverForm from "../../component/SelfDeliverForm/SelfDeliverForm";
import { slidesData } from "../../component/Carousel/mock";

const EGiftCard = () => {
  const [deliveryOption, setDeliveryOption] = useState(1);
  const [categoryData, setCategoryData] = useState(slidesData);
  const [choice, setChoice] = useState(1);

  const handleChoice = (value) => {
    setChoice(value);
  };
  const handleCategory = (data) => {
    setCategoryData(data);
  };
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <main>
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
        {choice === 1 && <Categories onClick={handleCategory}></Categories>}
        {categoryData?.length && choice === 1 && (
          <Carousel
            className={styles.carouselWrapper}
            slidesData={categoryData}
          ></Carousel>
        )}
        {choice === 2 && <div>Choose custom image</div>}
        <Form></Form>

        <div>
          <h1>Delivery options</h1>
          <p>Please select from one of the options below.</p>
          <div className={styles.optionButtonGroup}>
            <HMButton
              className={cn(
                styles.buttonContainer,
                deliveryOption === 1 ? styles.button : ""
              )}
              text="Email"
              onClick={() => setDeliveryOption(1)}
            ></HMButton>
            <HMButton
              className={cn(
                styles.buttonContainer,
                deliveryOption === 2 ? styles.button : ""
              )}
              text="Deliver to me"
              onClick={() => setDeliveryOption(2)}
            ></HMButton>
            <HMButton
              className={cn(
                styles.buttonContainer,
                deliveryOption === 3 ? styles.button : ""
              )}
              text="SMS"
              onClick={() => setDeliveryOption(3)}
            ></HMButton>
          </div>
          {deliveryOption === 1 && <EmailForm></EmailForm>}
          {deliveryOption === 2 && <SelfDeliverForm></SelfDeliverForm>}
          {deliveryOption === 3 && <SmsForm></SmsForm>}
        </div>
      </main>
    </Layout>
  );
};

export default EGiftCard;
