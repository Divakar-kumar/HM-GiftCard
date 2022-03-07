import styles from "./EmailForm.module.css";

const EmailForm = () => {
  return (
    <div>
      <div>
        <div className={styles.emailWrapper}>
          <div className={styles.emailLabel}>Recipient name</div>
          <div className={styles.emailInputWrapper}>
            <input type="text"></input>
          </div>
        </div>

        <div className={styles.emailWrapper}>
          <div className={styles.emailLabel}>Recipient email</div>
          <div className={styles.emailInputWrapper}>
            <input type="text"></input>
          </div>
        </div>

        <div className={styles.emailWrapper}>
          <div className={styles.emailLabel}>Sender name (optional)</div>
          <div className={styles.emailInputWrapper}>
            <input type="text"></input>
          </div>
        </div>

        <div className={styles.emailWrapper}>
          <div className={styles.emailLabel}>Delivery date</div>
          <div className={styles.emailInputWrapper}>
            <input type="text"></input>
          </div>
        </div>

        <div className={styles.emailWrapper}>
          <div className={styles.emailLabel}>Recipient email</div>
          <div className={styles.emailInputWrapper}>
            <input type="text"></input>
          </div>
        </div>
      </div>
      <p>The eGift card(s) will be delivered to the recipient's inbox.</p>
    </div>
  );
};

export default EmailForm;
