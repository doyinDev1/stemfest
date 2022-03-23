import React, { useState } from 'react'
import { Button, NavLink } from './style/Button.style'
import { HeroCta, HeroImage, HeroLeft, HeroRight, StyledHero } from './style/Hero.style'

const Hero = ({ theme, showModal, setShowModal }) => {
    return (
        // <Container>

        <StyledHero>
            <HeroLeft>

                <h1> {theme.heroData.title} </h1>
                <p> {theme.heroData.text} </p>

                <HeroCta>
                    <NavLink bgcolor={theme.colors.pryStemBlue} color={theme.colors.white} to="/register">Enroll Now</NavLink>
                    <NavLink bgcolor={theme.colors.pryStemYellow} color={theme.colors.white} to="/login">Login</NavLink>
                </HeroCta>

            </HeroLeft>

            <HeroRight>
                <HeroImage src={theme.heroData.illustration} />
            </HeroRight>
        </StyledHero>

        // </Container>

    )
}

export default Hero
