import React, { useState, useContext, useEffect } from "react";
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import "antd/dist/antd.css";
import styles from "./ImageUpload.module.css";
import { FormContext } from "../../appState";

const getSrcFromFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => resolve(reader.result);
  });
};

const ImageUpload = () => {
  const { setCustomImageDetails } = useContext(FormContext);
  const [customCardData, setCustomCardData] = useState({
    imageBase64: null,
    imageMessage: "",
  });
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    toDataURL(newFileList[0]).then((dataUrl) => {
      console.log("RESULT:", dataUrl);
      let selectedFile = newFileList[0].thumbUrl;
      let base64String = selectedFile && selectedFile.split(",")[1];
      setCustomCardData({
        imageBase64: base64String,
        imageMessage: customCardData.imageMessage,
      });
    });
  };

  useEffect(() => {
    setCustomImageDetails(customCardData);
  }, [customCardData]);

  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  const onPreview = async (file) => {
    const src = file.url || (await getSrcFromFile(file));
    const imgWindow = window.open(src);

    if (imgWindow) {
      const image = new Image();
      image.src = src;
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };

  const handleInputChange = (event) => {
    setCustomCardData({
      imageMessage: event.target.value,
      imageBase64: customCardData.imageBase64,
    });
  };

  return (
    <>
      <ImgCrop grid rotate>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 1 && "+ Upload Image"}
        </Upload>
      </ImgCrop>
      <div className={styles.cardMessage}>{customCardData.imageMessage}</div>
      <div className={styles.emailWrapper}>
        <div className={styles.emailLabel}>Custom Message on the Card</div>
        <div className={styles.emailInputWrapper}>
          <input
            className={styles.textBox}
            type="text"
            name="imageMessage"
            value={customCardData.imageMessage}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
