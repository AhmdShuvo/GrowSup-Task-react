import React from 'react';
import Contact from '../Contact/Contact';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Gallary from './Gallary';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            {/* ABOUT US COMPONENT  */}
            <AboutUs></AboutUs>
            {/* Gallary COMPONENT  */}
            <Gallary></Gallary>
            {/* CONTACT SECTION  */}
            {/* <Contact></Contact> */}
            <Contact></Contact>
        </>
    );
};

export default Home;