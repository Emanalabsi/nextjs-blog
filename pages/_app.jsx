import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* this is the ele that will be passed as para to the lay comp == children  */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
