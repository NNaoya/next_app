import { Provider } from 'next-auth/client'
import React from "react";
import 'src/styles/globals.scss'
import {Header} from "../layout/Header";
import Layout from "../layout/Layout";

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
