import "../styles/globals.css";
import "../styles/auth.css";
import "../styles/chat.css";
import { ContextProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
