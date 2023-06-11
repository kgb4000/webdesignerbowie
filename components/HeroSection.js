import styled from 'styled-components'
import Button from '@/components/Button'

const HeroSection = ({
  backgroundImage,
  heroText,
  subText,
  buttonText,
  backgroundHeight,
  buttonLink,
  backgroundPosition,
}) => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
        backgroundPosition={backgroundPosition}
      >
        <div className="content">
          <h1 className="heroText">{heroText}</h1>
          <p>{subText}</p>
          {buttonText && (
            <a href="tel:240-5415309">
              <WhiteButton>{buttonText}</WhiteButton>
            </a>
          )}
        </div>
      </Hero>
    </>
  )
}

const Hero = styled('div')`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.12),
      rgba(0, 0, 0, 0.32)
    ),
    url(${(props) => props.backgroundImage});
  background-position: ${(props) => props.backgroundPosition};
  min-height: ${(props) => props.backgroundHeight};
  background-size: cover;
  margin: 0 auto;
  max-width: 100vw;
  margin-bottom: 2rem;
  text-shadow: 2px 1px 1px #000;
  font-weight: 900;

  @media only screen and (min-device-width: 360px) {
    h1 {
      font-size: 2.5rem;
      font-weight: 900;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.6;
      font-weight: 700;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4.2rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.4;
    }
  }

  .content {
    max-width: 1000px;
    text-align: center;
    font-weight: 700;
    padding: 0 1.2rem;
    margin-top: 1rem;
  }
`

const WhiteButton = styled.button`
  cursor: pointer;
  padding: 1.2rem 1.5rem;
  color: #fff;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  border: 1px solid #2ecc71;
  background: #2ecc71;
  border-radius: 10px;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: 700;
  box-shadow: 0px 8px 0px #27ae60;
  margin: 2rem 0;
  outline: none;
  text-transform: uppercase;

  &:hover {
  background-color: #3e8e41;
  box-shadow: 0 5px ##27ae61;
  transform: translateY(4px);

  &:active {
  background-color: #3e8e41;
  box-shadow: 0 5px ##27ae61;
  transform: translateY(4px);

  @media only screen and (max-device-width: 320px) and (orientation: landscape) {
    font-size: 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 1.6rem;
    font-size: 1rem;
  }
`

export default HeroSection
