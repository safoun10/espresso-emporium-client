import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from '../../components/topHeader/TopHeader';

const AuthContainer = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthContainer;