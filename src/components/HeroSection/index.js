import React from 'react'
import Video from '../../images/23.jpg'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'

const Hero = () => {

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg src={Video} type='Image/jpg' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Carpentry Made Easy</HeroH1>
        <HeroP>Contact Andre's Carpentry Services for a quote for a custom art piece</HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
