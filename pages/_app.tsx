import type {AppProps} from 'next/app';

import '@/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp