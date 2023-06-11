// 'use client'
import Head from 'next/head'
import styled from 'styled-components'
import ContactForm from '@/components/Contact-Form'

export const metadata = {
  title: 'Contact Us | Call or Email Bowie Web Media.',
  description:
    'This is our Contact us page. Please feel free to contact us about your web design needs',
  metadataBase: new URL('https://bowiewebmedia.com'),
  alternates: {
    canonical: '/contact',
  },
}

export default function Contact() {
  return (
    <>
      <main>
        <section>
          <div className="content">
            <div className="medium-container">
              <h1 className="title">Contact Me</h1>
              <p className="center">I want to hear from you</p>
              <p>
                Phone: <a href="tel:1-240-541-5309">(240) 541-5309</a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:info@bowiewebmedia.com">
                  info@bowiewebmedia.com
                </a>
              </p>
              <p>Or fill out the form below</p>
              <h2>Send a Message</h2>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
    </>
  )
}
