import styled from 'styled-components'

export const Businesses = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`

export const Business = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 1rem;
  border: 1px solid #eee;
  box-shadow: 10px 10px 0px #000;

  img {
    width: 4rem;
    margin: 0 auto;
  }

  p {
    margin-top: 1rem;
    font-weight: 900;
  }
`
