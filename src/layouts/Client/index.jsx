import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function ClientLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
export default ClientLayout;
