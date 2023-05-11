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
  charSet: 'utf-8',
  title: '',
  description: 'SpaceRent : économisez sur vos séjours et revendez-les si vos plans changent !',
  author: 'SpaceRent'
}

export default function RootLayout({ children }) {
  return (

    <html lang='fr'>
      <head>

        <meta name='viewport' content='width=device-width, initial-scale=1' />
      
 


      </head>

      <body id="page-top">{children}</body>


    </html>
  )
}
