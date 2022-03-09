import styles from "./EmailTemplate.module.css";

const EmailTemplate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardImageContainer}>
        <div>
          <img
            src="https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/customoptions/Womensday1_600x250.jpg"
            className={styles.cardImage}
          />
        </div>
        <div>
          <p>Hi Receiver,</p>
        </div>
        <div>
          <p>You've got a H&M E-Gift Card</p>
        </div>
        <div>
          <h4>Your message will appear here</h4>
        </div>
        <div className={styles.information}>
          <img src="https://i.pinimg.com/originals/61/af/47/61af47fd051baf9be11c2095fbe1c782.png" />
          <div className={styles.cardDetails}>
            <h2>Rs 1000</h2>
            <div>Card Number</div>
            <div>xxxxxxxxxxxxxxxx</div>
            <div>Pin</div>
            <div>xxxxxx</div>
          </div>
        </div>
        <div>
          <p>* Validity: xx xx xxxx</p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
