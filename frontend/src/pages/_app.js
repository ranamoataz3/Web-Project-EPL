import "@/core/assets/styles/globals.scss";
import Layout from "@/core/components/Layout/Layout";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={montserrat.variable}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
