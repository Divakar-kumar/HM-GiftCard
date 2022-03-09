import Head from "next/head";
import React, { useState, useContext } from "react";
import cn from "classnames";
import axios from "axios";
// import Link from 'next/link'
import { useRouter } from "next/router";

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
import ImageUpload from "../../component/ImageUpload/ImageUpload";
import { FormContext } from "../../appState";

const EGiftCard = () => {
  const router = useRouter();
  const {
    customImageDetails,
    emailFormDetails,
    amountCardDetails,
    sMSFormDetails,
    selfFormDetails,
    cardImage,
  } = useContext(FormContext);
  const [deliveryOption, setDeliveryOption] = useState(1);
  const [categoryData, setCategoryData] = useState(slidesData);
  const [choice, setChoice] = useState(1);
  const [deliveryType, setDeliveryType] = useState("email");
  const [sendLater, setSendLater] = useState(false);

  const handleChoice = (value) => {
    setChoice(value);
  };
  const handleCategory = (data) => {
    setCategoryData(data);
  };

  const isToday = (date) => {
    const today = new Date();
    const someDate = new Date(date);
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    );
  };

  const handleBuy = async () => {
    const finalData = {
      ...emailFormDetails,
      ...amountCardDetails,
      ...sMSFormDetails,
      ...selfFormDetails,
      cardImage,
    };
    const sendLater = !isToday(finalData["deliveryDate"]);
    const gift_card = {
      amount: parseInt(finalData["amount"]),
      currency: "INR",
      quantity: parseInt(finalData["quantity"]),
      occasion: "Diwali",
      deliveryType: deliveryType,
      sendLater: sendLater,
    };
    const customer = {
      id: "",
    };

    if (customImageDetails && customImageDetails["imageBase64"]) {
      //api call
      // const data = customImageDetails["imageBase64"].split(",")[1];
      const data = customImageDetails["imageBase64"];
      await axios
        .post(
          "https://func-hmgiftcard.azurewebsites.net/api/uploadfilewithextensions?contenttype=image/png",
          data
        )
        .then((response) => {
          // console.log(response);
          gift_card["imageURL"] = response.data;
        });
    } else {
      gift_card["imageURL"] = finalData["cardImage"];
    }

    if (customImageDetails && customImageDetails["imageMessage"]) {
      gift_card["message"] = customImageDetails["imageMessage"];
    }

    if (sendLater) {
      gift_card["sendLaterDateTime"] = new Date(
        finalData["deliveryDate"]
      ).toISOString();
    }

    const recepient = {};
    if (deliveryType === "email") {
      recepient["name"] = finalData["recipientName"];
      recepient["message"] = finalData["message"];
      recepient["mailAddress"] = finalData["recipientEmail"];
    } else if (deliveryType === "sms") {
      recepient["name"] = finalData["recipientName"];
      recepient["message"] = finalData["message"];
      recepient["mobile"] = finalData["recipientPhone"];
    } else {
      recepient["name"] = finalData["recipientName"];
      recepient["mailAddress"] = "gunjan.bothra@hm.com";
    }
    if (finalData["senderName"]) {
      customer["name"] = finalData["senderName"];
    }

    const payload = {
      gift_card: gift_card,
      recepient: recepient,
      customer: customer,
    };

    axios
      .post("https://func-hmgiftcard.azurewebsites.net/api/giftcard", payload)
      .then((response) => {
        console.log(response);
        router.push(`http://localhost:3000/gift-card/orderConfirmation`);
      });
  };

  const handleDeliveryOption = (value, type) => {
    setDeliveryOption(value);
    setDeliveryType(type);
  };
  return (
    <Layout>
      <Head>
        <title>Gift Card Creation</title>
      </Head>
      <main>
        <section className={styles.spacing}>
          <h1>Card Customisation</h1>
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
        <hr />
        <section className={styles.spacing}>
          <h1>Card Details</h1>
          <Form></Form>
        </section>
        <hr />
        <section className={styles.spacing}>
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
                onClick={() => handleDeliveryOption(1, "email")}
              ></HMButton>
              <HMButton
                className={cn(
                  styles.buttonContainer,
                  deliveryOption === 2 ? styles.button : ""
                )}
                text="Deliver to me"
                onClick={() => handleDeliveryOption(2, "self")}
              ></HMButton>
              <HMButton
                className={cn(
                  styles.buttonContainer,
                  deliveryOption === 3 ? styles.button : ""
                )}
                text="SMS"
                onClick={() => handleDeliveryOption(3, "sms")}
              ></HMButton>
            </div>
            {deliveryOption === 1 && <EmailForm></EmailForm>}
            {deliveryOption === 2 && <SelfDeliverForm></SelfDeliverForm>}
            {deliveryOption === 3 && <SmsForm></SmsForm>}
          </div>
        </section>
        <div className={styles.optionButtonGroup}>
          <HMButton
            className={cn(styles.buttonContainer, styles.button)}
            text="PURCHASE E-GIFT CARD"
            onClick={handleBuy}
          ></HMButton>
        </div>
      </main>
    </Layout>
  );
};

export default EGiftCard;
// export default withRouter(EGiftCard);
