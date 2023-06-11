'use client'
import Head from 'next/head'
import styled from 'styled-components'
import ContactForm from '@/components/Contact-Form'

// export const metadata = {
//   title: 'About Bowie Web Media',
//   description:
//     'This is our About us page. Read how we can help you build a website for your business fast.',
//   canonical: '/about',
// }

export default function Contact() {
  return (
    <>
      <Head>
        <title>"Contact us"</title>
        <meta
          name="description"
          content="This is our Contact us page. Please feel free to contact us about your web design needs."
        />
      </Head>
      <main>
        <section>
          <div className="medium-container">
            <Content>
              <h1 className="title">Contact Me</h1>
              <p className="center">I want to hear from you</p>
              <p>
                Phone: <a href="tel:1-240-266-0588">(240) 266-0588</a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:info@bowiewebmedia.com">info@bowiewebmedia.com</a>
              </p>
              <p>Or fill out the form below</p>
              <h2>Send a Message</h2>
            </Content>
          </div>
        </section>
        <ContactForm />
      </main>
    </>
  )
}

const Content = styled.div`
  text-align: center;
`
