import Head from "next/head";
import React, { useState } from "react";
import cn from "classnames";
import Layout from "../../component/Layout/Layout";
import styles from "./corporate-card.module.css";
import HMButton from "../../component/Button/Button";
import Image from "next/image";

const CorporateCard = () => {
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = () => {
    setShowForm(false);
  };
  return (
    <Layout>
      <Head>
        <title>Corporate Card Booking</title>
      </Head>
      <main>
        <Image
          src="/images/banner2.jpeg"
          alt="me"
          layout="responsive"
          width={1400}
          height={271}
          className={styles.headerImage}
        />
        {showForm ? (
          <div className={styles.container}>
            <h3>
              We cater to all corporate/ bulk requirements for H&M Gift Cards
            </h3>
            <p>
              Please fill out the form below and we will get in touch with you
              within 24 hours*.
            </p>
            <form className={styles.amountWrapper}>
              <div className={styles.formItem}>
                <label for="name" className={styles.label}>
                  Your name
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  //   value=""
                />
              </div>

              <div className={styles.formItem}>
                <label className={styles.label} for="orgName">
                  Organisation name
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="orgName"
                  name="orgName"
                  //   value=""
                />
              </div>

              <div className={styles.formItem}>
                <label className={styles.label} for="orgEmail">
                  Official E-mail id
                </label>
                <input
                  className={styles.input}
                  type="email"
                  id="orgEmail"
                  name="orgEmail"
                  //   value=""
                />
              </div>

              <div className={styles.formItem}>
                <label className={styles.label} for="pinCode">
                  Pin Code
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  //   value=""
                />
              </div>

              <div className={styles.formItem}>
                <label className={styles.label} for="phnNumber">
                  Phone number
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="phnNumber"
                  name="phnNumber"
                  //   value=""
                />
              </div>

              <div className={styles.formItem}>
                <label className={styles.label} for="support">
                  How can we support
                </label>
                <select id="support" name="support" className={styles.input}>
                  <option value=""></option>
                  <option value="corporate">Corporate/ Bulk requirement</option>
                  <option value="personal">Personal requirement</option>
                  <option value="query">
                    Redemption/ product related query
                  </option>
                </select>
              </div>

              <div className={styles.formItem}>
                <label className={styles.label} for="comment">
                  Remarks/ Comment
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="comment"
                  name="comment"
                  //   value=""
                />
              </div>

              <div className={styles.formItem}>
                <HMButton
                  className={cn(styles.buttonContainer, styles.button)}
                  text="Submit"
                  onClick={handleSubmit}
                ></HMButton>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h3>Thank you for showing interest!</h3>
            <p>We will get in touch with you within 1 business day.</p>
            If you have an immediate Corporate requirement for H&M Pay Gift
            Cards, please send us an email to CorporateGiftCards@hm.com or call
            us at 01246236000 . Office hours 10 AM to 6 PM (Monday to Friday).
          </div>
        )}
      </main>
    </Layout>
  );
};

export default CorporateCard;
