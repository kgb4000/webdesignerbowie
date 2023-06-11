import './globals.scss'
import StyledComponentsRegistry from '/registry'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/FooterSection'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Designer in Bowie, MD | Websites Starting at $500',
  description:
    'I am a web designer in Bowie, MD, and I design simple, secure, fast, and mobile websites for general contractors.',
  metadataBase: new URL('https://bowiewebmedia.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <StyledComponentsRegistry>
          <Nav />
          {children}
        </StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  )
}
