import React, { useState } from "react";
import styles from "./SelfDeliverForm.module.css";

const SelfDeliverForm = () => {
  const [selfFormData, setSelfFormData] = useState({
    name: "",
  });

  const handleInputChange = (event) => {
    const data = { ...selfFormData };
    data[event.target.name] = event.target.value;
    setSelfFormData(data);
  };

  return (
    <div>
      <div>
        <div className={styles.selfDeliverWrapper}>
          <div className={styles.selfDeliverLabel}>Recipient name</div>
          <div className={styles.selfDeliverInputWrapper}>
            <input
              type="text"
              placeholder="Full name"
              name="name"
              value={selfFormData.name}
              onChange={handleInputChange}
            ></input>
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
