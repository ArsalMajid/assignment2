import React from 'react';
import HeaderSection from "../sections/home/HeaderSection.jsx";
import ShowcaseSection from '../sections/home/ShowcaseSection.jsx';
import FeaturesSection from '../sections/home/FeaturesSection.jsx';

const HomePage = ({ navigate }) => {
    return (
        <>
            <HeaderSection navigate={navigate} />
            <ShowcaseSection navigate={navigate} />
            <FeaturesSection />
        </>
    );
};

export default HomePage;