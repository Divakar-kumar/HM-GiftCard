import React, { useState } from "react";
import styles from "./Form.module.css";
import HMButton from "../Button/Button";
import cn from "classnames";

const amount = [
  {
    id: 1,
    denomination: 500,
  },
  {
    id: 2,
    denomination: 1000,
  },
  {
    id: 3,
    denomination: 1500,
  },
  {
    id: 4,
    denomination: 2000,
  },
];

const Form = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  return (
    <div>
      <div className={styles.amountWrapper}>
        <div className={styles.amountLabel}>Amount</div>
        <div className={styles.amountInputWrapper}>
          <input type="text"></input>
          <p>Choose an amount or enter a custom amount</p>
          <div className={styles.denomination}>
            <HMButton
              className={cn(selectedAmount === "1" ? styles.button : "")}
              text="Rs 500"
              onClick={() => setSelectedAmount("1")}
            ></HMButton>
            <HMButton
              className={cn(selectedAmount === "2" ? styles.button : "")}
              text="Rs 1000"
              onClick={() => setSelectedAmount("2")}
            ></HMButton>
            <HMButton
              className={cn(selectedAmount === "3" ? styles.button : "")}
              text="Rs 1500"
              onClick={() => setSelectedAmount("3")}
            ></HMButton>
            <HMButton
              className={cn(selectedAmount === "4" ? styles.button : "")}
              text="Rs 2000"
              onClick={() => setSelectedAmount("4")}
            ></HMButton>
          </div>
        </div>
      </div>

      <div className={styles.amountWrapper}>
        <div className={styles.amountLabel}>Quantity</div>
        <div className={styles.amountInputWrapper}>
          <input type="text"></input>
          <p>You can add up to 30 eGift cards to your order</p>
        </div>
      </div>

      <div className={styles.amountWrapper}>
        <div className={styles.amountLabel}>Message (optional)</div>
        <div className={styles.amountInputWrapper}>
          <textarea
            // id="w3review"
            name="message"
            rows="4"
            cols="50"
            placeholder="Add a personal message"
          ></textarea>
          <p>Remaining characters: 200 (5 remaining lines )</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
