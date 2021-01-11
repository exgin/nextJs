import '../styles/globals.css'; // Can only import global css in _app.js
import { AppProps } from 'next/app';

// Used to keep state when navigating between pages
function MainApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MainApp;
