import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

const progress = new ProgressBar({
  size: 2,
  color: "#ff385c",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
            <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
