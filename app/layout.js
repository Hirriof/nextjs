//import './globals.css'

import '../public/vendor/bootstrap/css/bootstrap.min.css'
import '../public/css/bootstrapValidator.min.css'
import '../public/css/animate.min.css'
import '../public/vendor/font-awesome/css/font-awesome.min.css'
import '../public/css/styles.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SpaceRent : économisez sur vos séjours et revendez-les si vos plans changent !',
  description: 'SpaceRent : économisez sur vos séjours et revendez-les si vos plans changent !',
}

export default function RootLayout({ children }) {
  return (

    <html lang='fr'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='SpaceRent : économisez sur vos séjours et revendez-les si vos plans changent !'/>
        <meta name='author' content='SpaceRent' />
      </head>

      <body id="page-top">{children}
      
      
      
      
      
      
      
      </body>


    </html>
  )
}
