import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import LineUp from '../components/LineUp';

const LineUpPage = () => {
 return (
        <div className="app">
            <Navbar />
            <main style={{ paddingTop: '80px' }}>
                <LineUp />
            </main>
            <Footer />
        </div>
    );
};

export default LineUpPage;
