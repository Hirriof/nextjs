import './globals.css'
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
      
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/css/bootstrapValidator.min.css"/>
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css" />
        <link href="css/styles.css" rel="stylesheet" />

      </head>

      <body id="page-top">{children}</body>


    </html>
  )
}
