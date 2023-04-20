import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Link from 'next/link'
import { useEffect } from 'react'



export default function App({ Component, pageProps }) {



  return <>


    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Skydash Admin</title>

      <Link rel="stylesheet" href="vendors/feather/feather.css" />
      <Link rel="stylesheet" href="vendors/ti-icons/css/themify-icons.css" />
      <Link rel="stylesheet" href="vendors/css/vendor.bundle.base.css" />


      <Link rel="stylesheet" href="vendors/datatables.net-bs4/dataTables.bootstrap4.css" />
      <Link rel="stylesheet" href="vendors/ti-icons/css/themify-icons.css" />
      <Link rel="stylesheet" type="text/css" href="js/select.dataTables.min.css" />


      {/* <Link rel="stylesheet" href="css/vertical-layout-light/style.css" /> */}

      <Link rel="shortcut icon" href="images/favicon.png" />

    </Head>






    {/*  plugins:js */}
    < Script src="vendors/js/vendor.bundle.base.js" strategy="beforeInteractive"></Script >
    {/*  endinject */}
    {/*  Plugin js for this page */}
    <Script src="vendors/chart.js/Chart.min.js" strategy="beforeInteractive"></Script>
    <Script src="vendors/datatables.net/jquery.dataTables.js" strategy="beforeInteractive"></Script>
    <Script src="vendors/datatables.net-bs4/dataTables.bootstrap4.js" strategy="beforeInteractive"></Script>
    <Script src="js/dataTables.select.min.js" strategy="beforeInteractive"></Script>

    {/*  End plugin js for this page */}
    {/*  inject:js */}
    <Script src="js/off-canvas.js" strategy="beforeInteractive"></Script>
    <Script src="js/hoverable-collapse.js" strategy="beforeInteractive"></Script>
    <Script src="js/template.js" strategy="beforeInteractive"></Script>
    <Script src="js/settings.js" strategy="beforeInteractive"></Script>
    <Script src="js/todolist.js" strategy="beforeInteractive"></Script>
    {/*  endinject */}
    {/*  Custom js for this page*/}
    <Script src="js/dashboard.js" strategy="beforeInteractive"></Script>
    <Script src="js/Chart.roundedBarCharts.js" strategy="beforeInteractive"></Script>
    {/*  End custom js for this page*/}


    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  </>
}
