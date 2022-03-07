import { createContext, useState } from "react";

//create a context, with createContext api
export const FormContext = createContext();

const FormContextProvider = (props) => {
  // this state will be shared with all components
  const [customImageDetails, setCustomImageDetails] = useState();
  const [emailFormData, setEmailFormData] = useState();

  return (
    // this is the provider providing state
    <FormContext.Provider
      value={{
        customImageDetails,
        setCustomImageDetails,
        emailFormData,
        setEmailFormData,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
