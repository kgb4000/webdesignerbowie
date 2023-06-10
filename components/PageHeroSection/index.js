'use client'

import React from 'react'
import Link from 'next/link'
import Button from '@/components/Button'

import {
  HeroContainer,
  HeroBg,
  HeroImage,
  HeroContent,
  HeroBtnWrapper,
  HeroBtn,
} from './PageHeroElements'

const PageHero = ({ heroText, subText, heroBtnLink, buttonText }) => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroImage></HeroImage>
      </HeroBg>
      <HeroContent>
        <h1>{heroText}</h1>
        {subText && <p>{subText}</p>}
        <HeroBtnWrapper buttonText={buttonText}>
          {buttonText && (
            <a href={heroBtnLink}>
              <HeroBtn>{buttonText}</HeroBtn>
            </a>
          )}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default PageHero
