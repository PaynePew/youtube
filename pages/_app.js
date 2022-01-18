import Layout from "../components/layout";
import { ThemeProvider } from "styled-components";
import theme from "../shared/theme";
import GlobalStyles from "../shared/normalize";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
