import React from "react";
import Image from "next/image";
import Layout from "../../component/Layout/Layout";
import styles from "./orderConfirmation.module.css";

const orderConfirmation = () => {
  return (
    <Layout>
      <div>
        <Image
          src="/images/banner2.jpeg"
          alt="me"
          layout="responsive"
          width={1400}
          height={271}
          className={styles.headerImage}
        />
        <div style={{ padding: "1rem 0 0 0" }}>
          <h1 className={styles.heading}>
            Your E-Gift Card Order is placed Successfully!
          </h1>
        </div>
        <div>
          <p>
            We are getting started on your order right away, and you will
            receive an order confirmation email shortly. In the meantime,
            explore the latest fashion and get inspired by new trends.
          </p>
        </div>
        <div>
          H&M members earn points on every purchase and have access to
          fashionable rewards and special perks. If you're a member, it may take
          up to 24 hours for your new points to be updated.
        </div>
      </div>
    </Layout>
  );
};

export default orderConfirmation;
