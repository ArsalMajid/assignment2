import React from 'react';

const HeaderSection = ({ navigate }) => {
    return (
        <header className='header'>
            {/* The Navbar would be rendered by the Layout, but we need the routing function here */}
            <div className="header-content">
                <h1 className='lg-heading text-light main-heading'>travel the world</h1>
                <p className='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
                <a href="#" className='btn btn-primary text-red md-heading' onClick={() => navigate('about')}>Explore Places</a>
            </div>
        </header>
    );
};

export default HeaderSection;