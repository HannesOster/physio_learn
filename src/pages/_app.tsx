import type { AppProps } from "next/app";
import Head from "next/head";
import Heading from "../components/Header";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <GlobalStyle />
      <Head>
        <title>Physio</title>
      </Head>
      <Heading />
      <Component {...pageProps} />
    </>
  );
}
