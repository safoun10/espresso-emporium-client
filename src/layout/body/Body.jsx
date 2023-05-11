import React from 'react';
import TopHeader from '../../components/topHeader/TopHeader';
import Banner from '../../components/banner/Banner';
import Features from '../../components/features/Features';

const Body = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Banner></Banner>
            <Features></Features>
            <div>next section</div>
        </div>
    );
};

export default Body;