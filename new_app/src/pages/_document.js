import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >



        <link rel="stylesheet" href="/vendors/feather/feather.css" media="all" />
        <link rel="stylesheet" href="/vendors/ti-icons/css/themify-icons.css" media="all" />
        <link rel="stylesheet" href="/vendors/css/vendor.bundle.base.css" media="all" />


        <link rel="stylesheet" href="/vendors/datatables.net-bs4/dataTables.bootstrap4.css" media="all" />
        <link rel="stylesheet" href="/vendors/ti-icons/css/themify-icons.css" media="all" />
        <link rel="stylesheet" type="/text/css" href="js/select.dataTables.min.css" media="all" />


        <link rel="stylesheet" href="/css/vertical-layout-light/style.css" media="all" />

        <link rel="shortcut icon" href="/images/favicon.png" media="all" />



      </Head>
      <body>
        <Main />
        <NextScript />
        {/* upper */}
        {/* <Script src="js/off-canvas.js" strategy="beforeInteractive"></Script>
        <Script src="js/hoverable-collapse.js" strategy="beforeInteractive"></Script>
        <Script src="js/settings.js" strategy="beforeInteractive"></Script>
        <Script src="js/todolist.js" strategy="beforeInteractive"></Script>
        <Script src="js/template.js " strategy="beforeInteractive"></Script> */}
        {/* upper */}


        <Script src="/js/hoverable-collapse.js" strategy="beforeInteractive"></Script>
        <Script src="/js/template.js" strategy="beforeInteractive"></Script>
        <Script src="/js/settings.js" strategy="beforeInteractive"></Script>
        <Script src="/js/todolist.js" strategy="beforeInteractive"></Script>
        <Script src="/js/off-canvas.js" strategy="beforeInteractive"></Script>
        <Script src="/vendors/js/vendor.bundle.base.js" strategy="beforeInteractive"></Script >

        <Script src="/vendors /chart.js/Chart.min.js" strategy="beforeInteractive"></Script>
        <Script src="/vendors/datatables.net/jquery.dataTables.js" strategy="beforeInteractive"></Script>
        <Script src="/vendors/datatables.net-bs4/dataTables.bootstrap4.js" strategy="beforeInteractive"></Script>
        <Script src="/js/dataTables.select.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/dashboard.js" strategy="beforeInteractive"></Script>
        <Script src="/js/Chart.roundedBarCharts.js" strategy="beforeInteractive" ></Script>
      </body>
    </Html >
  )
}
