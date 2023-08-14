// "use client"
import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import { store } from '../redux/store'


import ErrorBoundary from '@/copmonent/ErrorBoundary'
import { useEffect } from 'react'






export default function App({ Component, pageProps }) {




  return <>


    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Skydash Admin</title>


      {/* <script src="/vendors/js/vendor.bundle.base.js" ></script >
      <script src="/js/off-canvas.js"></script>
      <script src="/js/hoverable-collapse.js"></script>
      <script src="/js/template.js"></script>
      <script src="/js/settings.js"></script>
      <script src="/js/todolist.js"></script> */}


    </Head>


    <ErrorBoundary>
      <Provider store={store}>

        <Component {...pageProps} />



      </Provider>
    </ErrorBoundary>


  </>
}
