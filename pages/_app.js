import '../styles/globals.css'; // Can only import global css in _app.js

// Used to keep state when navigating between pages
function MainApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MainApp;
