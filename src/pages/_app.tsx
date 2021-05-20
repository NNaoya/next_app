import { Provider } from 'next-auth/client'
import React from "react";

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
