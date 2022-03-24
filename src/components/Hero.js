import React from 'react'
import { HeroLink, NavLink } from './style/Button.style'
import { HeroCta, HeroImage, HeroLeft, HeroRight, HeroTitle, HeroIntroTitle, StyledHero, HeroSubTitle, HeroParagraph } from './style/Hero.style'

const Hero = ({ theme, showModal, setShowModal }) => {
    return (
        <StyledHero>
            <HeroLeft>
                <HeroIntroTitle>Welcome to our School</HeroIntroTitle>
                <HeroTitle> {theme.heroData.title}</HeroTitle>
                <HeroSubTitle>{theme.heroData.subTitle}</HeroSubTitle>
                <HeroParagraph> {theme.heroData.text} </HeroParagraph>
                <HeroCta>
                    <HeroLink to="/register">Enroll Now</HeroLink>
                    <HeroLink to="/login">Login</HeroLink>
                </HeroCta>
            </HeroLeft>
            <HeroRight>
                <HeroImage src={theme.child} />
            </HeroRight>
        </StyledHero>

        // </Container>

    )
}

export default Hero
