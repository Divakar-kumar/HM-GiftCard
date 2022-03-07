import styles from "./SmsForm.module.css";

const SmsForm = () => {
  return (
    <div>
      <div>
        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Recipient name</div>
          <div className={styles.smsInputWrapper}>
            <input type="text" placeholder="Full name"></input>
          </div>
        </div>

        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Recipient phone</div>
          <div className={styles.smsInputWrapper}>
            <input type="text"></input>
            <p>A valid mobile phone number</p>
          </div>
        </div>

        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Sender name (optional)</div>
          <div className={styles.smsInputWrapper}>
            <input type="text" placeholder="Your name"></input>
            <p>The name of the person the card is from</p>
          </div>
        </div>

        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Delivery date</div>
          <div className={styles.smsInputWrapper}>
            <input type="date"></input>
          </div>
        </div>

        <div className={styles.smsWrapper}>
          <div className={styles.smsLabel}>Recipient email</div>
          <div className={styles.smsInputWrapper}>
            <input type="text"></input>
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
