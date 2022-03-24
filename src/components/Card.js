import React from 'react'
import { CardStyle } from './style/Card.style'
import theme from '../data/theme'
import { Button } from './style/Button.style'

const Card = ({ logo, alt, title, description, buttonText, margin }) => {
    return (
        <CardStyle margin={margin} >
            <img src={logo} alt={alt} />
            <h3> {title} </h3>
            <p> {description} </p>
        </CardStyle>
    )
}

export default Card
