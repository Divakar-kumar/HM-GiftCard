import React, { useState, useContext } from "react";
import cn from "classnames";
import styles from "./Step3.module.css";
import HMButton from "../component/Button/Button";
import EmailForm from "../component/EmailForm/EmailForm";
import SmsForm from "../component/SmsForm/SmsForm";
import SelfDeliverForm from "../component/SelfDeliverForm/SelfDeliverForm";
import Image from "next/image";
import { FormContext } from "../appState";

const Step3 = ({ updateDelivery }) => {
  const { customImageDetails, cardImage, amountCardDetails } =
    useContext(FormContext);
  const [deliveryOption, setDeliveryOption] = useState(1);
  const [deliveryType, setDeliveryType] = useState("email");
  const [src, setSrc] = useState("");

  const handleDeliveryOption = (value, type) => {
    setDeliveryOption(value);
    setDeliveryType(type);
    updateDelivery(value, type);
  };

  return (
    <>
      {" "}
      {/* <p>Please select from one of the options below.</p> */}
      <section className={styles.spacing}>
        <div className={styles.subSection1}>
          {customImageDetails && customImageDetails.imageBase64 ? (
            <div>
              <Image
                id="customImage"
                src={`data:image/png;base64,${customImageDetails.imageBase64}`}
                height={271}
                width={430}
              />
              <div className={styles.cardMessage}>
                {customImageDetails.imageMessage}
              </div>
            </div>
          ) : (
            <Image src={cardImage.image} height={271} width={430} alt="Card" />
          )}
          <div className={styles.innerSubSection1}>
            <p>Amount:{amountCardDetails.amount}</p>
            <p>Quantity:{amountCardDetails.quantity}</p>
          </div>
        </div>
        <div className={styles.subSection2}>
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
    </>
  );
};

export default Step3;
