import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import '../global.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Search GraphQL Jobs</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
