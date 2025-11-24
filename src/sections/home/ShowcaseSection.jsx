import React from 'react';

const ShowcaseSection = ({ navigate }) => {
    return (
        <section className='showcase'>
            <div className="container">
                {/* Row 1 */}
                <div className="row row1">
                    <div className="img-box">
                        <img src="https://placehold.co/800x400/34495e/white?text=DEGANVY,+U.K." alt="Deganvy, U.K."/>
                    </div>
                    <div className="text-box">
                        <h2 className='lg-heading text-black'>DEGANVY, U.K</h2>
                        <p className='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?</p>
                        <a href="#" className='btn btn-secondary' onClick={() => navigate('about')}>More</a>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="row row2">
                    <div className="img-box">
                        <img src="https://placehold.co/800x400/2c3e50/white?text=DESERT,+EGYPT" alt="Desert, Egypt"/>
                    </div>
                    <div className="text-box">
                        <h2 className='lg-heading text-black'>DESERT, EGYPT</h2>
                        <p className='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque.</p>
                        <a href="#" className='btn btn-secondary' onClick={() => navigate('about')}>More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;