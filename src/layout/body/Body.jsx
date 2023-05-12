import React from 'react';
import TopHeader from '../../components/topHeader/TopHeader';
import Banner from '../../components/banner/Banner';
import Features from '../../components/features/Features';
import Footer from '../../components/footer/Footer';

const Body = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Banner></Banner>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Body;