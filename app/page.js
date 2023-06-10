'use client'

import Button from '@/components/Button'
import styled from 'styled-components'
import HeroSection from '@/components/HeroSection'
import { Businesses, Business } from '../components/BusinessesWeWorkWith'

export default function Home() {
  return (
    <main>
      <HeroSection
        heroText="Looking for a Web Designer in Bowie?"
        subText="We Design and Build Website for General Contractors."
        backgroundImage="/images/maryland-seo-company.webp"
        backgroundHeight="80vh"
        backgroundPosition="center"
        buttonText="Schedule your free consultaion today!"
        buttonLink="https://google.com"
      />
      <section>
        <div className="medium-container">
          <h2 className="title">Web Design Services in Bowie</h2>
          <p className="subtext">
            We create simple websites for general contractors who are want to
            create an online presence.
          </p>
          <Services>
            <div className="service-card">
              <img
                src="/images/web-designer-bowie-md.webp"
                className="page-img"
                alt="Web designer in Bowie, Maryland."
                title="Web designer."
                loading="lazy"
              />
              <div>
                <h3>Web Design</h3>
                <p>
                  We design and build simple websites that attract customers to
                  your business, and make you look professional. They also look
                  fantastic on desktops, tablets, and mobile devices.
                </p>
              </div>
            </div>
            <div className="service-card">
              <img
                src="/images/web-development-bowie.webp"
                className="page-img"
                alt="Web development."
                title="Web development."
                loading="lazy"
              />
              <div>
                <h3>Web Development</h3>
                <p>
                  We design and build simple websites that search engines will
                  discover, attract customers to your business, and look
                  fantastic on desktops, tablets, and mobile devices.
                </p>
              </div>
            </div>
            <div className="service-card">
              <img
                src="/images/local-seo.webp"
                className="page-img"
                alt="Local SEO"
                title="Local SEO."
                loading="lazy"
              />
              <div>
                <h3>Local SEO</h3>
                <p>
                  With a better website and page optimization, we get more
                  people to find your small business on Google and Bing. I get
                  more people on your small business website to make more money.
                </p>
              </div>
            </div>
          </Services>
        </div>
      </section>
      <Button buttonText="Call to get started today!" />
      <section>
        <div className="medium-container">
          <div className="grid">
            <img
              src="/images/home-service-business-general-contractor.webp"
              className="page-img"
              alt="Maryland SEO company"
              title="Home service businesses we work with."
              loading="lazy"
            />
            <div>
              <h2>
                We Design and Build Websites for Home Service Businesses in
                Bowie
              </h2>
              <p></p>
              <p>We work with:</p>
              <Businesses>
                <Business>
                  <img
                    src="/images/icons/asphalt-paving-contractor.png"
                    className="business-icon"
                    alt="Businesses our company works with - Asphalt paving companies."
                    title="Businesses we work with - Asphalt paving companies."
                    loading="lazy"
                  />
                  <p>Asphalt Paving Companies</p>
                </Business>
                <Business>
                  <img
                    src="/images/icons/plumbing-contractors.png"
                    className="business-icon"
                    alt="Businesses our company works with - Plumbing Contractors."
                    title="Businesses our company works with - Plumbing Contractors."
                    loading="lazy"
                  />
                  <p>Plumbing Contractors</p>
                </Business>
                <Business>
                  <img
                    src="/images/icons/hvac-contractors.png"
                    className="business-icon"
                    alt="Businesses we work with - HVAC Contractors."
                    title="Businesses we work with - HVAC Contractors."
                    loading="lazy"
                  />
                  <p>HVAC Contractors</p>
                </Business>
                <Business>
                  <img
                    src="/images/icons/roofing-contractors.png"
                    className="business-icon"
                    alt="Businesses we work with - Roofing Contractors."
                    title="Businesses we work with - Roofing Contractors."
                    loading="lazy"
                  />
                  <p>Roofing Contractors</p>
                </Business>
                <Business>
                  <img
                    src="/images/icons/landscaping-companies.png"
                    className="business-icon"
                    alt="Businesses we work with - Landscaping Companies."
                    title="Businesses we work with - Landscaping Companies."
                    loading="lazy"
                  />
                  <p>Landscaping Companies</p>
                </Business>
                <Business>
                  <img
                    src="/images/icons/pest-control-companies.png"
                    className="business-icon"
                    alt="Businesses we work with - Pest Control Companies."
                    title="Businesses we work with - Pest Control Companies."
                    loading="lazy"
                  />
                  <p>Pest Control Companies</p>
                </Business>
                <Business>
                  <img
                    src="/images/icons/electrical-contractors.png"
                    className="business-icon"
                    alt="Businesses we work with - Electrical Contractors."
                    title="Businesses we work with - Electrical Contractors."
                    loading="lazy"
                  />
                  <p>Electrical Contractors</p>
                </Business>
                <Business>
                  <img
                    src="/images/icons/swimming-pool-builders.png"
                    className="business-icon"
                    alt="Businesses we work with - Swimming Pool Builders."
                    title="Businesses we work with - Swimming Pool Builders."
                    loading="lazy"
                  />
                  <p>Swimming Pool Builders</p>
                </Business>
                <Business>
                  <img
                    src="/images/icons/junk-removal-companies.png"
                    className="business-icon"
                    alt="Asphalt paving companies - Businesses we work with."
                    title="Businesses we work with - Asphalt paving companies."
                    loading="lazy"
                  />
                  <p>Junk Removal Companies</p>
                </Business>
                <Business>
                  <img
                    src="/images/icons/general-contractors.png"
                    className="business-icon"
                    alt="Businesses we work with - General Contractors."
                    title="Businesses we work with - General Contractors."
                    loading="lazy"
                  />
                  <p>General Contractors</p>
                </Business>
              </Businesses>
              <p className="subtext">
                Call us today and let’s see how we can help find opportunities
                to help boost your sales and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Button buttonText="Call to get started today!" />
      <section>
        <div className="container">
          <h2 className="title">
            What You Get When You Work With Bowie Web Media
          </h2>
          <p className="subtext">Here is what you get when you work with us.</p>
          <Deliverables>
            <Deliverable>
              <img
                src="/images/icons/check-mark.png"
                className="check"
                alt="You get to know everything we're doing- 100% transparency."
                loading="lazy"
              />
              <div>
                <h3>Professional Landing Page Design</h3>
                <p>
                  We'll work closely with you to understand your brand and your
                  goals, and then design a website that truly reflects your
                  business.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <img
                src="/images/icons/check-mark.png"
                className="check"
                alt="You get to know everything we're doing- 100% transparency."
                loading="lazy"
              />
              <div>
                <h3>Responsive Design</h3>
                <p>
                  We ensure your website will work seamlessly on every device
                  and browser, offering an optimal viewing experience for your
                  visitors no matter how they access your site.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <img
                src="/images/icons/check-mark.png"
                className="check"
                alt="You get to know everything we're doing- 100% transparency."
                loading="lazy"
              />
              <div>
                <h3>SEO Optimization</h3>
                <p>
                  We understand the importance of visibility on search engines.
                  Therefore, we ensure your site is SEO-friendly, improving the
                  likelihood of appearing in top search results.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <img
                src="/images/icons/check-mark.png"
                className="check"
                alt="You get to know everything we're doing- 100% transparency."
                loading="lazy"
              />
              <div>
                <h3>User-Friendly Interface</h3>
                <p>
                  We design websites with user experience in mind, ensuring it's
                  intuitive and easy to navigate.
                </p>
              </div>
            </Deliverable>
          </Deliverables>
          <Deliverables>
            <Deliverable>
              <img
                src="/images/icons/check-mark.png"
                className="check"
                alt="You get to know everything we're doing- 100% transparency."
                loading="lazy"
              />
              <div>
                <h3>Fast Loading Speed</h3>
                <p>
                  We pay attention to website performance to ensure your site
                  loads quickly, improving user experience and positively
                  influencing your SEO.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <img
                src="/images/icons/check-mark.png"
                className="check"
                alt="You get to know everything we're doing- 100% transparency."
                loading="lazy"
              />
              <div>
                <h3>Website Analytics</h3>
                <p>
                  We integrate tools like Google Analytics into your website so
                  you can track visitor behavior and gain valuable insights to
                  inform your business decisions.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <img
                src="/images/icons/check-mark.png"
                className="check"
                alt="You get to know everything we're doing- 100% transparency."
                loading="lazy"
              />
              <div>
                <h3>Website Maintenance and Support</h3>
                <p>
                  After your website goes live, we continue to offer support and
                  maintenance services to ensure its continuous optimal
                  performance.
                </p>
              </div>
            </Deliverable>
            <Deliverable>
              <img
                src="/images/icons/check-mark.png"
                className="check"
                alt="You get to know everything we're doing- 100% transparency."
                loading="lazy"
              />
              <div>
                <h3>A Secure Website</h3>
                <p>
                  We take the security of your site seriously and integrate
                  robust security measures to prevent breaches and keep your
                  customer data safe.
                </p>
              </div>
            </Deliverable>
          </Deliverables>
        </div>
      </section>
      <Button buttonText="Call to get started today!" />
      <section>
        <div className="container">
          <div className="grid">
            <img
              src="/images/happy-bowie-web-media-customer.jpg"
              className="page-img"
              alt="Maryland SEO company"
              title="Home service businesses we work with."
              loading="lazy"
            />
            <div>
              <h2>Why Work With Us</h2>
              <h3>1. We Move fast</h3>
              <p>
                Success loves speed and we do to. We can start your website and
                have it done in less than 2 weeks.
              </p>
              <h3>2. You'll Get Noticed</h3>
              <p>We design and build websites that enhance your brand.</p>
              <h3>3. Fair and Affordable Pricing</h3>
              <p>
                We live here. We want to see businesses in Bowie thrive. We are
                vested in the success of all Bowie small businesses.
              </p>
              <h3>4. No Long-Term Contracts</h3>
              <p>
                We design and build your website, and it's yours forever. We
                even give you the code so you own everything.
              </p>
              <h3>5. We are a Local Web Design Company</h3>
              <p>
                We live here. We want to see businesses in Bowie and Prince
                George's County thrive. We are vested in the success of any
                Bowie small businesses we partner with.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Button buttonText="Call to get started today!" />
      <section>
        <div className="container">
          <h2 className="title">
            Frequently Asked Questions about Our Web Design Services
          </h2>
          <p className="subtext">Here are some FAQs that may help you out</p>
          <FAQs>
            <div>
              <h3>How long does it take to build a website?</h3>
              <p>
                The timeframe depends on the complexity of the project. On
                average, a custom website design project can take between 1 - 2
                weeks.
              </p>
              <h3>Will my website be mobile-friendly?</h3>
              <p>
                Absolutely! We design all our websites to be responsive, which
                means they will adapt to any screen size and provide an optimal
                user experience on all devices.
              </p>

              <h3>What about website security?</h3>
              <p>
                We implement various measures to secure your website, including
                SSL certificates, secure coding practices, and regular updates
                and backups.
              </p>

              <h3>Do you provide website hosting?</h3>
              <p>
                While we primarily focus on web design, we can certainly assist
                you in finding the right hosting solution for your website.
              </p>

              <h3>How much input can I have in the website design?</h3>
              <p>
                Your input is vital. We'll work closely with you throughout the
                design process to ensure the website aligns with your vision and
                meets your business needs.
              </p>
              <h3>Do I need local SEO?</h3>
              <p>
                Yes, if your business operates in a specific geographical area,
                or if it has a physical location that customers can visit, then
                Local SEO is crucial. It can help your business stand out in
                local search results, drive more traffic from local customers,
                and ultimately increase sales.
              </p>
            </div>
            <div>
              <h3>Do you offer website maintenance?</h3>
              <p>
                Yes, we offer a variety of website maintenance packages that
                include services such as regular updates, backups, and
                performance optimizations.
              </p>

              <h3>Will my website be search engine friendly?</h3>
              <p>
                Yes, we incorporate SEO best practices into every website we
                design to help increase your visibility on search engines.
              </p>

              <h3>What is your payment structure for web design projects?</h3>
              <p>
                We typically require an initial deposit before we begin, with
                the balance payable upon completion of the project. We also
                offer payment plans for larger projects.
              </p>

              <h3>Do you provide content for the website?</h3>
              <p>
                While we primarily focus on design, we can help guide you in
                producing high-quality content, or we can recommend professional
                copywriters if needed.
              </p>

              <h3>How do I track website performance?</h3>
              <p>
                We integrate tools like Google Analytics and Google Search
                Console into your website, which provide valuable insights into
                your site's performance and visitor behavior.
              </p>
              <h3>
                What happens if I encounter problems with the website after it’s
                completed?
              </h3>
              <p>
                We offer ongoing support packages and are always available to
                assist if you encounter any issues. Your website's success is
                our priority.
              </p>
            </div>
          </FAQs>
          {/* <div>
            <h3>Why Do I Need a Website</h3>
            <h3>How Many Hours Does it Take to Build a Website?</h3>
            <h3>What is a Fair Price to Build a Website?</h3>
            <h3>How Much Does a Website Cost for a Small Business?</h3>
            <h3>Do I Need Local SEO?</h3>
            <h3>What are the benefits of Local SEO?</h3>
            <h3>How long does it take for Local SEO to work?</h3>
            <h3>What is Google My Business?</h3>
          </div> */}
        </div>
      </section>
      <Button buttonText="Call to get started today!" />
    </main>
  )
}

const Services = styled.div`
  margin: 2rem 0;
  .service-card {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
    margin-bottom: 3rem;
    box-shadow: 8px 20px #eee;
    @media screen and (min-width: 1024px) {
      box-shadow: 8px 20px #eee;
    }

    img {
      width: 100%;
      margin: 0;
      border-radius: 20px 20px 0 0;
    }

    div {
      padding: 2rem 4rem;

      h3 {
        margin-top: 0;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }
`

const Deliverables = styled.div`
  margin: 2rem 0;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`

const Deliverable = styled.div`
  margin: 1rem 0;
  display: flex;

  img.check {
    margin: 0;
    margin-right: 1.5rem;
    width: 54px;
    height: 54px;
    }

    h3 {
      margin: 0 0 1rem 0;
    }

  }
`

const FAQs = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`
