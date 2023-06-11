import Button from '@/components/Button'

export const metadata = {
  title:
    'About Us | Bowie Web Media',
  description:
    'This is our About us page. Read how we can help general contractors build a website, save time and use their website to make money.',
  metadataBase: new URL('https://bowiewebmedia.com'),
  alternates: {
    canonical: '/about',
  },
}

export default function About() {
  return (
    <>
      <main>
        <section>
          <div className="small-container">
            <h1>About me</h1>
            <p>
              My name is Kester, and I am a frontend web developer and web
              designer living in Bowie, MD.
            </p>
            <p>
              I started Bowie Web Media after seeing family and friends receive
              subpar websites for their home-based businesses, with none of the
              basic search engine optimization features they were promised or
              they were paying for.
            </p>
            <p>
              I also started Bowie Web Media for small business owners who don't
              have the time to learn how to build their own websites using HTML,
              CSS3, or Javascript, or use website builders like Wix,
              Squarespace, Weebly.
            </p>
            <p>
              As a person who loves to code and who is always keeping up with
              the latest and best practices, I can help answer any questions you
              make have in regards to websites. If you have a question, please
              don't hesitate to contact me anytime.
            </p>
            <p>
              If we work together, I promise to do my best to design and build
              your website so that it brings you more customers, business and
              more money.
            </p>
          </div>
          <div className="small-container">
            <h2>Why Work With Me</h2>
            <p>
              I believe people should use their websites to make more money. A
              website is more than just a digital business card; it's a powerful
              tool that, when leveraged correctly, can generate significant
              revenue and growth for your business.
            </p>
            <p>
              This can be achieved through a variety of strategies, including
              selling products or services directly from the website, using it
              as a platform to showcase your expertise and attract new clients,
              or even monetizing your site's content through advertising or
              affiliate marketing.
            </p>
            <p>
              However, it's essential to remember that maximizing a website's
              earning potential is not a passive process. It involves ongoing
              efforts in areas such as SEO, content marketing, usability
              enhancements, and conversion rate optimization.
            </p>
            <p>
              With a strategic approach and a commitment to providing value for
              your audience, your website can become a major driver of financial
              success for your business.
            </p>
          </div>
          <div className="small-container">
            <h2>What You Get From Me!</h2>
            <div>
              <h3>No Bull</h3>
              <p>
                I give the the truth and nothing but the truth. I'm a fair
                person that will give you the best website for your business at
                a fair price and I stand by my work. If you don't like my work,
                I'll give you your money back no questions asked.
              </p>
            </div>
            <div>
              <h3>No Nickel and Diming</h3>
              <p>
                I will help you and your business save money by charging a fair
                price. Also, as a froontend web developer, I know things in the
                industry that some web agencies wouldn't tell you that will save
                you a ton of money.
              </p>
            </div>
            <div>
              <h3>Always Up to Date</h3>
              <p>
                I build websites that are mobile-ready, fast, and up to date( I
                built this site using Next.js). I can integrate things like the
                Facebook Pixel that will help you with advertizing your small
                business on Facebook, and build Chatbots to help you connect and
                engage with your customers even more.
              </p>
            </div>
          </div>
        </section>
        <Button buttonText="Call me to get started today!" />
      </main>
    </>
  )
}
