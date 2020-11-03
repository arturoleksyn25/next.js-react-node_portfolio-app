import type {AppProps} from 'next/app';
import {AppContextType} from "next/dist/next-server/lib/utils";

import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({Component, ctx}:AppContextType) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {pageProps}
}


export default MyApp