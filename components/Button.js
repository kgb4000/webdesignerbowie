'use client'

import styled from 'styled-components'

export default function ButtonForamt({ buttonText }) {
  return (
    <div className="center-btn container">
      <ButtonBtn>{buttonText}</ButtonBtn>
    </div>
  )
}

const ButtonBtn = styled.button`
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
  @media (min-width: 900px) {
    margin: 2rem 0;
    font-size: 1.4em;
  }
`
