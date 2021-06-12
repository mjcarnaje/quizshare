import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";

import store from "../store";

import "../styles/nprogress.css";
import "../styles/globals.css";

NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
