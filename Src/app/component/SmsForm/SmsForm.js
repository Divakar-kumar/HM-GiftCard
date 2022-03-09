import React, { useState, useContext, useEffect } from "react";
import { FormContext } from "../../appState";
import styles from "./SmsForm.module.css";

const SmsForm = () => {
  const { setSMSFormDetails } = useContext(FormContext);
  const [smsData, setSmsData] = useState({
    recipientName: "",
    recipientPhone: "",
    senderName: "",
    deliveryDate: "",
  });

  const handleInputChange = (event) => {
    const data = { ...smsData };
    data[event.target.name] = event.target.value;
    setSmsData(data);
  };
  useEffect(() => {
    setSMSFormDetails(smsData);
  }, [smsData]);

  return (
    <div>
      <div>
        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Recipient name</div>
          <div className={styles.smsInputWrapper}>
            <input
              type="text"
              placeholder="Full name"
              name="recipientName"
              value={smsData.recipientName}
              onChange={handleInputChange}
              className={styles.textBox}
            ></input>
          </div>
        </div>

        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Recipient phone</div>
          <div className={styles.smsInputWrapper}>
            <input
              type="text"
              name="recipientPhone"
              value={smsData.recipientPhone}
              onChange={handleInputChange}
              className={styles.textBox}
            ></input>
            <p>A valid mobile phone number</p>
          </div>
        </div>

        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Sender name (optional)</div>
          <div className={styles.smsInputWrapper}>
            <input
              type="text"
              placeholder="Your name"
              name="senderName"
              value={smsData.senderName}
              onChange={handleInputChange}
              className={styles.textBox}
            ></input>
            <p>The name of the person the card is from</p>
          </div>
        </div>

        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Delivery date</div>
          <div className={styles.smsInputWrapper}>
            <input
              type="date"
              name="deliveryDate"
              value={smsData.deliveryDate}
              onChange={handleInputChange}
              className={styles.textBox}
            ></input>
          </div>
        </div>
      </div>
      <p>
        The eGift card(s) will be delivered to the recipient's phone by SMS.
      </p>
    </div>
  );
};

export default SmsForm;
