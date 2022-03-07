import React, { useState } from "react";
import styles from "./smsForm.module.css";

const SmsForm = () => {
  const [smsData, setSmsData] = useState({
    recipientName: "",
    recipientPhone: "",
    senderName: "",
    deliveryDate: "",
    recipientEmail: "",
  });

  const handleInputChange = (event) => {
    const data = { ...smsData };
    data[event.target.name] = event.target.value;
    setSmsData(data);
  };

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
            ></input>
          </div>
        </div>

        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Recipient phone</div>
          <div className={styles.smsInputWrapper}>
            <input
              type="number"
              name="recipientPhone"
              value={smsData.recipientPhone}
              onChange={handleInputChange}
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
            ></input>
          </div>
        </div>

        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Recipient email</div>
          <div className={styles.smsInputWrapper}>
            <input
              type="text"
              name="recipientEmail"
              value={smsData.recipientEmail}
              onChange={handleInputChange}
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
