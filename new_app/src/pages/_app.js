"use client"
import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
// import link from 'next/link'
import ErrorBoundary from '@/copmonent/ErrorBoundary'





export default function App({ Component, pageProps }) {



  return <>


    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Skydash Admin</title>

      <link rel="stylesheet" href="vendors/feather/feather.css" />
      <link rel="stylesheet" href="vendors/ti-icons/css/themify-icons.css" />
      <link rel="stylesheet" href="vendors/css/vendor.bundle.base.css" />


      <link rel="stylesheet" href="vendors/datatables.net-bs4/dataTables.bootstrap4.css" />
      <link rel="stylesheet" href="vendors/ti-icons/css/themify-icons.css" />
      <link rel="stylesheet" type="text/css" href="js/select.dataTables.min.css" />


      <link rel="stylesheet" href="css/vertical-layout-light/style.css" />

      <link rel="shortcut icon" href="images/favicon.png" />

    </Head>






    < Script src="vendors/js/vendor.bundle.base.js" strategy="beforeInteractive"></Script >

    <Script src="vendors/chart.js/Chart.min.js" strategy="beforeInteractive"></Script>
    <Script src="vendors/datatables.net/jquery.dataTables.js" strategy="beforeInteractive"></Script>
    <Script src="vendors/datatables.net-bs4/dataTables.bootstrap4.js" strategy="beforeInteractive"></Script>
    <Script src="js/dataTables.select.min.js" strategy="beforeInteractive"></Script>


    <Script src="js/off-canvas.js" strategy="beforeInteractive"></Script>
    <Script src="js/hoverable-collapse.js" strategy="beforeInteractive"></Script>
    <Script src="js/template.js" strategy="beforeInteractive"></Script>
    <Script src="js/settings.js" strategy="beforeInteractive"></Script>
    <Script src="js/todolist.js" strategy="beforeInteractive"></Script>

    <Script src="js/dashboard.js" strategy="beforeInteractive"></Script>
    <Script src="js/Chart.roundedBarCharts.js" strategy="beforeInteractive"></Script>


    <ErrorBoundary>
      <Provider store={store}>

        <Component {...pageProps} />

      </Provider>
    </ErrorBoundary>


  </>
}
