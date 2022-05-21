import React from 'react';
import Info from '../Info';
import Serives from '../Serives';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import MakeAppointment from './MakeAppointment';
import Tesimonials from './Tesimonials';

const Home = () => {
    return (
        <div className='px-12' >
            <Banner></Banner>
            <Info></Info>
            <Serives></Serives>
            <MakeAppointment></MakeAppointment>
            <Tesimonials></Tesimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div >
    );
};

export default Home;