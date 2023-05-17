

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
  title: 'SpaceRent : économisez sur vos séjours et revendez-les si vos plans changent !',
  description: 'SpaceRent : économisez sur vos séjours et revendez-les si vos plans changent !',
  author: 'SpaceRent'
}

export default function RootLayout({ children }) {
  return (

    <html lang='fr'>
      <head>

        <meta name='viewport' content='width=device-width, initial-scale=1' />
      
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>



      </head>

      <body id="page-top">{children}</body>


    </html>
  )
}
