import "@/core/assets/styles/globals.scss";
import Layout from "@/core/components/Layout/Layout";
import { Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { useState, useEffect } from "react";
// import store from "@/storage/store/Store";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// export default function App({ Component, pageProps }) {
//   let persistor = persistStore(store);
//   return (
//     <>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <div className={montserrat.variable}>
//             <Layout>
//               <Component {...pageProps} />
//             </Layout>
//           </div>
//         </PersistGate>
//       </Provider>
//     </>
//   );
// }

// export default function App({ Component, pageProps }) {
//   // Ensure localStorage is available before creating the persistor
//   if (typeof window !== "undefined") {
//     const store = require("@/storage/store/Store").default; // Importing store dynamically
//     const persistor = persistStore(store);

//     return (
//       <>
//         <Provider store={store}>
//           <PersistGate loading={null} persistor={persistor}>
//             <div className={montserrat.variable}>
//               <Layout>
//                 <Component {...pageProps} />
//               </Layout>
//             </div>
//           </PersistGate>
//         </Provider>
//       </>
//     );
//   } else {
//     return (
//       <>
//         {/* Return a loading indicator or placeholder when storage isn't available */}
//         <div>Loading...</div>
//       </>
//     );
//   }
// }

// ... (imports)

export default function App({ Component, pageProps }) {
  const [persistorReady, setPersistorReady] = useState(false);
  const [store, setStore] = useState(null);
  const [persistor, setPersistor] = useState(null);

  useEffect(() => {
    // Ensure localStorage is available before creating the persistor
    if (typeof window !== "undefined") {
      const tempstore = require("@/storage/store/Store").default
      setStore(tempstore); // Importing store dynamically
      const temppersistor = persistStore(tempstore);
      setPersistor(temppersistor);
      setPersistorReady(true);
    }
  }, []);

  return (
    <>
      {persistorReady ? (
        <Provider store={store}>
          <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <div className={montserrat.variable}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </div>
          </PersistGate>
        </Provider>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

