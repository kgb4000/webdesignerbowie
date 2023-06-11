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
      <Head></Head>
      <main>
        <section>
          <div className="medium-container">
            <Content>
              <h1 className="title">Contact Us</h1>
              <p className="center">We want to hear from you</p>
              <p>
                Phone: <a href="tel:1-240-266-0588">(240) 266-0588</a>
              </p>
              <p>
                Email: <a href="mailto:info@bowieseo.com">info@bowieseo.com</a>
              </p>
              <p>Or fill out the form below</p>
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
