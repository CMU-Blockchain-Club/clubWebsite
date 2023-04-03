import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { load, trackPageview } from "fathom-client";
import { useEffect } from "react";

// Record a pageview when route changes
Router.events.on("routeChangeComplete", (as, routeProps) => {
  if (!routeProps.shallow) {
    trackPageview();
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // load fathom
    load("PAWHTJHK", {
      includedDomains: ["www.cmublockchain.xyz", "cmublockchain.xyz"],
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
