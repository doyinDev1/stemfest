import React, { useState } from 'react'
import theme from '../data/theme';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
// import Cta from '../components/Cta';
import Download from '../components/Download';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import RegistrationModal from '../components/RegistrationModal';
import Sponsors from '../components/Sponsors';

const Home = () => {

    return (
        <>
            <Header theme={theme} />
            <Hero theme={theme} />
            <Download theme={theme} />
            <Sponsors />
            {/* <FAQ theme={theme} />
            <Cta theme={theme} />*/}
            <Footer theme={theme} />
        </>
    )
}

export default Home
