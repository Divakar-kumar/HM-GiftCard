import React, { useState, useContext, useEffect } from "react";
import styles from "./Form.module.css";
import HMButton from "../Button/Button";
import { FormContext } from "../../appState";
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
  const { setAmountCardDetails } = useContext(FormContext);
  const [selectedAmount, setSelectedAmount] = useState(1);
  const [cardData, setCardData] = useState({
    amount: "500",
    quantity: 1,
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    amount: "",
    quantity: "",
  });

  const handleAmountSelection = (event, value) => {
    setSelectedAmount(value);
    console.log(event);
    setCardData({
      ...cardData,
      amount: event.target.textContent.split(" ")[1],
    });
  };

  const handleInputChange = (event) => {
    const data = { ...cardData };
    data[event.target.name] = event.target.value;
    setCardData(data);
  };

  const handleBlur = (event) => {
    if (event.target.name === "amount") {
      if (
        parseInt(event.target.value) < 500 ||
        parseInt(event.target.value) > 2000
      ) {
        setErrorMessage({ ...errorMessage, amount: "Enter valid amount" });
      } else {
        setErrorMessage({ ...errorMessage, amount: "" });
      }
    }

    if (event.target.name === "quantity") {
      if (
        parseInt(event.target.value) < 1 ||
        parseInt(event.target.value) > 30
      ) {
        setErrorMessage({ ...errorMessage, quantity: "Enter valid quantity" });
      } else {
        setErrorMessage({ ...errorMessage, quantity: "" });
      }
    }
  };

  useEffect(() => {
    setAmountCardDetails(cardData);
  }, [cardData]);

  return (
    <div>
      <div className={styles.amountWrapper}>
        <div className={styles.amountLabel}>Amount</div>
        <div className={styles.amountInputWrapper}>
          <input
            type="number"
            name="amount"
            value={cardData.amount}
            min="500"
            max="2000"
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={styles.textBox}
          ></input>
          {errorMessage.amount && (
            <p className={styles.errorText}>{errorMessage.amount}</p>
          )}
          <p>Choose an amount or enter a custom amount</p>
          <div className={styles.denomination}>
            <HMButton
              className={cn(selectedAmount === 1 ? styles.button : "")}
              text="Rs 500"
              onClick={(event) => handleAmountSelection(event, 1)}
            ></HMButton>
            <HMButton
              className={cn(selectedAmount === 2 ? styles.button : "")}
              text="Rs 1000"
              onClick={(event) => handleAmountSelection(event, 2)}
            ></HMButton>
            <HMButton
              className={cn(selectedAmount === 3 ? styles.button : "")}
              text="Rs 1500"
              onClick={(event) => handleAmountSelection(event, 3)}
            ></HMButton>
            <HMButton
              className={cn(selectedAmount === 4 ? styles.button : "")}
              text="Rs 2000"
              onClick={(event) => handleAmountSelection(event, 4)}
            ></HMButton>
          </div>
        </div>
      </div>

      <div className={styles.amountWrapper}>
        <div className={styles.amountLabel}>Quantity</div>
        <div className={styles.amountInputWrapper}>
          <input
            type="number"
            value={cardData.quantity}
            name="quantity"
            onChange={handleInputChange}
            onBlur={handleBlur}
            min="1"
            max="30"
            className={styles.textBox}
          ></input>
          {errorMessage.quantity && (
            <p className={styles.errorText}>{errorMessage.quantity}</p>
          )}
          <p>You can add up to 30 eGift cards to your order</p>
        </div>
      </div>

      <div className={styles.amountWrapper}>
        <div className={styles.amountLabel}>Message (optional)</div>
        <div className={styles.amountInputWrapper}>
          <textarea
            name="message"
            rows="4"
            cols="50"
            placeholder="Add a personal message"
            value={cardData.message}
            onChange={handleInputChange}
            className={styles.textBox}
          ></textarea>
          <p>Remaining characters: 200 (5 remaining lines )</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
