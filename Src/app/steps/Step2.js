import React, { useContext } from "react";
import Form from "../component/Form/Form";
import styles from "./Step2.module.css";
import Image from "next/image";
import { FormContext } from "../appState";

const Step2 = () => {
  const { customImageDetails, cardImage } = useContext(FormContext);

  return (
    <section className={styles.spacing}>
      <div className={styles.subSection1}>
        {customImageDetails && customImageDetails.imageBase64 ? (
          <div>
            <Image
              id="customImage"
              src={`data:image/png;base64,${customImageDetails.imageBase64}`}
              height={271}
              width={430}
            />
            <div className={styles.cardMessage}>
              {customImageDetails.imageMessage}
            </div>
          </div>
        ) : (
          <Image src={cardImage.image} height={271} width={430} alt="Card" />
        )}
      </div>
      <Form></Form>
    </section>
  );
};

export default Step2;
