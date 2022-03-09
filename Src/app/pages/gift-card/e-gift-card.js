import Head from "next/head";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

// import HMButton from "../../component/Button/Button";
import styles from "./e-gift-card.module.css";
import Layout from "../../component/Layout/Layout";
import { FormContext } from "../../appState";

import Step1 from "../../steps/Step1";
import Step2 from "../../steps/Step2";
import Step3 from "../../steps/Step3";

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
  const [deliveryType, setDeliveryType] = useState("email");
  // const [sendLater, setSendLater] = useState(false);

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
      ...cardImage,
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
      gift_card["imageURL"] = finalData["imageUrl"];
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
        router.push(`/gift-card/orderConfirmation`);
      });
  };

  const handleDeliveryOption = (value, type) => {
    setDeliveryOption(value);
    setDeliveryType(type);
  };

  const step1Content = <Step1></Step1>;
  const step2Content = <Step2></Step2>;
  const step3Content = <Step3 updateDelivery={handleDeliveryOption}></Step3>;

  return (
    <Layout>
      <Head>
        <title>Gift Card Creation</title>
      </Head>
      <main className="stepProgress">
        <div className={styles.pageTitle}>Create Gift Card</div>
        <StepProgressBar
          startingStep={0}
          onSubmit={handleBuy}
          submitBtnName="PURCHASE E-GIFT CARD"
          primaryBtnClass={styles.primaryButton}
          secondaryBtnClass={styles.secondaryButton}
          contentClass={styles.spacing}
          steps={[
            {
              label: "Card Customisation",
              name: "step 1",
              content: step1Content,
            },
            {
              label: "Card Details",
              name: "step 2",
              content: step2Content,
            },
            {
              label: "Delivery Options",
              name: "step 3",
              content: step3Content,
            },
          ]}
        />
        <div className={styles.optionButtonGroup}>
          {/* <HMButton
            className={cn(styles.buttonContainer, styles.button)}
            text="PURCHASE E-GIFT CARD"
            onClick={handleBuy}
          ></HMButton> */}
        </div>
      </main>
    </Layout>
  );
};

export default EGiftCard;
