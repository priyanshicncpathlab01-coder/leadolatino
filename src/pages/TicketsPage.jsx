import React from 'react';
import Navbar from '../components/Navbar';
import Tickets from '../components/Tickets';
import Footer from '../components/Footer';

const TicketsPage = () => {
    return (
        <div className="app">
            <Navbar />
            <main style={{ paddingTop: '80px' }}>
                <Tickets />
            </main>
            <Footer />
        </div>
    );
};

export default TicketsPage;
