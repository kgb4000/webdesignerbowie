'use client'

import ContactForm from '@/components/Contact-Form'

export default function Contact() {
  return (
    <>
      <main>
        <section>
          <div className="medium-container">
            <h1 className="title">Contact Us</h1>
            <p className="center">We want to hear from you</p>

            <p>
              Phone: <a href="tel:1-240-266-0588">(240) 266-0588</a>
            </p>
            <p>
              Email: <a href="mailto:info@bowieseo.com">info@bowieseo.com</a>
            </p>
            <p>Or fill out the form below</p>
          </div>
        </section>
        <ContactForm />
      </main>
    </>
  )
}

const metadata = {
  title: 'About me | Web Designer',
  openGraph: {
    title: 'About me | Web Designer',
    description:
      'I am a web designer living in Bowie and I design sites for general Contractors.',
  },
}
