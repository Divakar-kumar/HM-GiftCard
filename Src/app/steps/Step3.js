import React, { useState } from "react";
import cn from "classnames";
import styles from "./Step3.module.css";
import HMButton from "../component/Button/Button";
import EmailForm from "../component/EmailForm/EmailForm";
import SmsForm from "../component/SmsForm/SmsForm";
import SelfDeliverForm from "../component/SelfDeliverForm/SelfDeliverForm";

const Step3 = ({ updateDelivery }) => {
  const [deliveryOption, setDeliveryOption] = useState(1);
  const [deliveryType, setDeliveryType] = useState("email");
  const handleDeliveryOption = (value, type) => {
    setDeliveryOption(value);
    setDeliveryType(type);
    updateDelivery(value, type);
  };
  return (
    <>
      {" "}
      <section className={styles.spacing}>
        <div>
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
    </>
  );
};

export default Step3;
