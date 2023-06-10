import styled from 'styled-components'
import Button from '../Button'

export const HeroContainer = styled.div`
  background: #2c3e50;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  min-height: 80vh;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 80vh;
  height: 80vh;
  overflow: hidden;
`

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;

  h1 {
    color: #fff;
    line-height: 1.6;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px #000;

    @media screen and (min-width: 480px) {
      font-size: 3.5rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 5.5rem;
    }
  }

  p {
    color: #fff;
    letter-spacing: 1.5px;
    text-shadow: 1px 1px 2px #000;

    @media screen and (max-width: 480px) {
      font-size: 1.125rem;
    }
  }
`

export const HeroBtnWrapper = styled.div`
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const HeroBtn = styled(Button)`
  text-transform: uppercase;
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
  @media screen and (min-width: 500px) {
  }
`
