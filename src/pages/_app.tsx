import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../styles";
import Header from "../components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Physio</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
