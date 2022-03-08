import { createContext, useState } from "react";

//create a context, with createContext api
export const FormContext = createContext();

const FormContextProvider = (props) => {
  // this state will be shared with all components
  const [customImageDetails, setCustomImageDetails] = useState();
  const [emailFormDetails, setEmailFormDetails] = useState();
  const [amountCardDetails, setAmountCardDetails] = useState();
  const [sMSFormDetails, setSMSFormDetails] = useState();
  const [selfFormDetails, setSelfFormDetails] = useState();
  const [cardImage, setCardImageDetails] = useState();

  return (
    // this is the provider providing state
    <FormContext.Provider
      value={{
        customImageDetails,
        setCustomImageDetails,
        emailFormDetails,
        setEmailFormDetails,
        amountCardDetails,
        setAmountCardDetails,
        sMSFormDetails,
        setSMSFormDetails,
        selfFormDetails,
        setSelfFormDetails,
        cardImage,
        setCardImageDetails,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
