import React, { useState } from "react";
import styles from "./EmailForm.module.css";

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    recipientName: "",
    recipientEmail: "",
    senderName: "",
    deliveryDate: "",
  });

  const handleInputChange = (event) => {
    const data = { ...emailData };
    data[event.target.name] = event.target.value;
    setEmailData(data);
  };

  return (
    <div>
      <div>
        <div className={styles.emailWrapper}>
          <div className={styles.emailLabel}>Recipient name</div>
          <div className={styles.emailInputWrapper}>
            <input
              type="text"
              name="recipientName"
              value={emailData.recipientName}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>

        <div className={styles.emailWrapper}>
          <div className={styles.emailLabel}>Recipient email</div>
          <div className={styles.emailInputWrapper}>
            <input
              type="text"
              name="recipientEmail"
              value={emailData.recipientEmail}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>

        <div className={styles.emailWrapper}>
          <div className={styles.emailLabel}>Sender name (optional)</div>
          <div className={styles.emailInputWrapper}>
            <input
              type="text"
              name="senderName"
              value={emailData.senderName}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>

        <div className={styles.emailWrapper}>
          <div className={styles.emailLabel}>Delivery date</div>
          <div className={styles.emailInputWrapper}>
            <input
              type="text"
              name="deliveryDate"
              value={emailData.deliveryDate}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
      </div>
      <p>The eGift card(s) will be delivered to the recipient's inbox.</p>
    </div>
  );
};

export default EmailForm;
