import "../styles/globals.css";
import FormContextProvider from "../appState";

function MyApp({ Component, pageProps }) {
  return (
    <FormContextProvider>
      <Component {...pageProps} />;
    </FormContextProvider>
  );
}

export default MyApp;
