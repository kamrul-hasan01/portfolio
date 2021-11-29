import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Skills from '../Skills/Skills';
const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    );
};

export default Home;