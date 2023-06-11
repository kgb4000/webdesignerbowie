'use client'

import styled from 'styled-components'

export default function FooterSection() {
  return (
    <>
      <Footer className="footer-color">
        <div className="footer-container">
          <div className="footer">
            <div className="footer-section">
              <h3>Bowie Web Media</h3>
              <p>info@bowiewebmedia.com</p>
              <p>
                <a href="tel:240-541-5309">(240) 541-5309</a>
              </p>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <p>Web Design</p>
              <p>Web Develpoment</p>
              <p>Local SEO</p>
              <p>Google My Business Management</p>
            </div>
            <div className="footer-section">
              <h3>Hours</h3>
              <p>Sunday: Closed</p>
              <p>Monday: 9:00am - 6:00pm</p>
              <p>Tuesday: 9:00am - 6:00pm</p>
              <p>Wednesday: 9:00am - 6:00pm</p>
              <p>Thursday: 9:00am - 6:00pm</p>
              <p>Friday: 9:00am - 6:00pm</p>
              <p>Saturday: 9:00am - 3:00pm</p>
            </div>
            <div className="footer-section">
              <h3>Map</h3>
            </div>
          </div>
        </div>
      </Footer>
      <LowerFooter>
        <div className="footer-container">
          <div className="flex">
            <p>Bowie Web Media &copy;{new Date().getFullYear()}</p>
            <div>
              <span>
                <small>Terms & Conditions</small>
              </span>{' '}
              |{' '}
              <span>
                <small>Privacy Policy</small>
              </span>
            </div>
          </div>
        </div>
      </LowerFooter>
    </>
  )
}

const Footer = styled.footer`
  margin-top: 4rem;
  padding: 8rem 0;
  color: #fff;
  background-color: #1e2c35;
  .footer {
    @media screen and (min-width: 900px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      align-content: center;
    }

    @media screen and (min-width: 1140px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 60px;
      align-content: center;
    }
  }
  .footer-section {
    h3 {
      font-size: 1.8rem;
    }

    p {
      margin: 0.5rem 0;
    }
  }
`

const LowerFooter = styled.div`
  padding: 2rem 0;
  background-color: #000;
  color: #fff;
  text-align: center;

  @media screen and (min-width: 1140px) {
    .flex {
      display: flex;
      justify-content: space-between;
    }
  }
`
