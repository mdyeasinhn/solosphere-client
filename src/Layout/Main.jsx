import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            {/* Outlet */}
            <div className='min-h-[calc(100vh-306px)]'>
            <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;