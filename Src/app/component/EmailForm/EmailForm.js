import React, { useState, useContext, useEffect } from "react";
import styles from "./EmailForm.module.css";
import { FormContext } from "../../appState";

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    recipientName: "",
    recipientEmail: "",
    senderName: "",
    deliveryDate: "",
  });
  const { setEmailFormDetails } = useContext(FormContext);

  useEffect(() => {
    setEmailFormDetails(emailData);
  }, [emailData]);

  useEffect(() => {
    document.getElementById("date").defaultValue = new Date();
  }, []);

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
              className={styles.textBox}
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
              className={styles.textBox}
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
              className={styles.textBox}
            ></input>
          </div>
        </div>

        <div className={styles.emailWrapper}>
          <div className={styles.emailLabel}>Delivery date</div>
          <div className={styles.emailInputWrapper}>
            <input
              id="date"
              type="date"
              name="deliveryDate"
              value={emailData.deliveryDate}
              onChange={handleInputChange}
              className={styles.textBox}
              // defaultValue={defaultDate}
            ></input>
          </div>
        </div>
      </div>
      <p>The eGift card(s) will be delivered to the recipient's inbox.</p>
    </div>
  );
};

export default EmailForm;
