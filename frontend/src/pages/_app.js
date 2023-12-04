import "@/core/assets/styles/globals.scss";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={montserrat.variable}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
