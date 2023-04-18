import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import { store } from '../redux/store'



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


      {/* <link rel="stylesheet" href="css/vertical-layout-light/style.css" /> */}

      <link rel="shortcut icon" href="images/favicon.png" />

    </Head>



    {/*  plugins:js */}
    <Script src="vendors/js/vendor.bundle.base.js"></Script>
    {/*  endinject */}
    {/*  Plugin js for this page */}
    <Script src="vendors/chart.js/Chart.min.js"></Script>
    <Script src="vendors/datatables.net/jquery.dataTables.js"></Script>
    <Script src="vendors/datatables.net-bs4/dataTables.bootstrap4.js"></Script>
    <Script src="js/dataTables.select.min.js"></Script>

    {/*  End plugin js for this page */}
    {/*  inject:js */}
    <Script src="js/off-canvas.js"></Script>
    <Script src="js/hoverable-collapse.js"></Script>
    <Script src="js/template.js"></Script>
    <Script src="js/settings.js"></Script>
    <Script src="js/todolist.js"></Script>
    {/*  endinject */}
    {/*  Custom js for this page*/}
    <Script src="js/dashboard.js"></Script>
    <Script src="js/Chart.roundedBarCharts.js"></Script>
    {/*  End custom js for this page*/}



    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  </>
}
