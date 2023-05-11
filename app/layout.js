//import './globals.css'

import '../public/vendor/bootstrap/css/bootstrap.min.css'
import '../public/css/bootstrapValidator.min.css'
import '../public/css/animate.min.css'
import '../public/vendor/font-awesome/css/font-awesome.min.css'
import '../public/css/styles.css'

import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (

    <html lang='fr'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='SpaceRent : économisez sur vos séjours et revendez-les si vos plans changent !'/>
        <meta name='author' content='SpaceRent' />

    {/*<!-- jQuery -->*/}
    <Script src="vendor/jquery/jquery.min.js"></Script>

    {/*<!-- Bootstrap Core JavaScript -->*/}
    <Script src="vendor/bootstrap/js/bootstrap.min.js"></Script>
	<Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/js/bootstrapValidator.min.js"></Script>
    
    {/*<!-- Wow Animations -->*/}
    <Script src="vendor/wow.min.js"></Script>

    {/*<!-- Plugin JavaScript -->*/}
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></Script>

    {/*<!-- Theme JavaScript -->*/}*
    <Script src="js/main.js"></Script>
    <Script src="js/jquery.isotope.js"></Script>


      </head>

      <body id="page-top">{children}</body>


    </html>
  )
}
