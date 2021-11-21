import { Provider } from 'next-auth/client'
import React from "react";
import 'src/styles/globals.scss'
import {Header} from "../components/molecules/Header";

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
