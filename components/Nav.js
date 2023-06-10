'use client'

import styled from 'styled-components'
import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <Header>
        <div className="header-container">
          <div className="header">
            <div className="logo">
              <Link href="/">Bowie Web Media</Link>
            </div>
            <nav>
              <ul className="nav">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>Testimonials</li>
                <li>Blog</li>
                <li>Projects</li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Header>
    </>
  )
}

const Header = styled.header`
  height: 70px;
  line-height: 70px;

  a {
    text-decoration: none;
    color: #000;
  }

  .header {
    display: flex;
    justify-content: space-between;

    .logo {
      font-weight: 900;
      display: inline-block;
    }

    ${'' /* // Mobile menu */}

    ul.nav {
      display: none;

      li {
        list-style-type: none;
        margin: 0 1rem;
      }
    }

    @media (min-width: 728px) {
      ul.nav {
      display: flex;
  }
`
