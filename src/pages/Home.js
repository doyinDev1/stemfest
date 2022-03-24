import React, { useState } from 'react'
import theme from '../data/theme';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Download from '../components/Download';
import Sponsors from '../components/Sponsors';

const Home = () => {

    return (
        <>
            <Header theme={theme} />
            <Hero theme={theme} />
            <Download theme={theme} />
            <Sponsors />
            <Footer theme={theme} />
        </>
    )
}

export default Home
