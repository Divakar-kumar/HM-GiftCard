import styles from "./SelfDeliverForm.module.css";

const SelfDeliverForm = () => {
  return (
    <div>
      <div>
        <div className={styles.selfDeliverWrapper}>
          <div className={styles.selfDeliverLabel}>Recipient name</div>
          <div className={styles.selfDeliverInputWrapper}>
            <input type="text" placeholder="Full name"></input>
            <p>The name of the person you're giving the card to</p>
          </div>
        </div>
      </div>
      <p>
        The eGift card(s) will be sent to your email inbox, for you to deliver
        personally.
      </p>
    </div>
  );
};

export default SelfDeliverForm;
