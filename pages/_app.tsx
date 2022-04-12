import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";

declare global {
  interface Window {
    routeTimeout: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore
  Router.onRouteChangeStart = (url: Location) => {
    if (String(url) !== window.location.pathname) {
      NProgress.start();
    }
  };

  //@ts-ignore
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };

  //@ts-ignore
  return <Component {...pageProps} />;
}

export default MyApp;
