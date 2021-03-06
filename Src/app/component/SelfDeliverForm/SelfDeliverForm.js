import React, { useState, useContext, useEffect } from "react";
import styles from "./SelfDeliverForm.module.css";
import { FormContext } from "../../appState";
import cn from "classnames";

const SelfDeliverForm = () => {
  const { setSelfFormDetails } = useContext(FormContext);
  const [selfFormData, setSelfFormData] = useState({
    recipientName: "",
  });

  const handleInputChange = (event) => {
    const data = { ...selfFormData };
    data[event.target.name] = event.target.value;
    setSelfFormData(data);
  };

  useEffect(() => {
    setSelfFormDetails(selfFormData);
  }, [selfFormData]);

  return (
    <div>
      <div>
        <div className={styles.selfDeliverWrapper}>
          <div className={cn(styles.required, styles.selfDeliverLabel)}>
            Recipient name
          </div>
          <div className={styles.selfDeliverInputWrapper}>
            <input
              required
              type="text"
              placeholder="Full name"
              name="recipientName"
              value={selfFormData.recipientName}
              onChange={handleInputChange}
              className={styles.textBox}
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
