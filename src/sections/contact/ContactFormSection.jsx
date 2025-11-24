import React from 'react';

const CompanyAddress = () => (
    <div className="company-address">
        <div className="address-group">
            <i className="fas fa-map-marker-alt fa-3x text-red"></i>
            <h2 className="text-gray md-heading">Location</h2>
            <p>#2661 Janakpuri Colony, city name, town name</p>
        </div>
        <div className="address-group">
            <i className="far fa-envelope fa-3x text-red"></i>
            <h2 className="text-gray md-heading">Email</h2>
            <p>harshitvashisth@mycompany.com</p>
        </div>
        <div className="address-group">
            <i className=" fas fa-phone-square-alt fa-3x text-red"></i>
            <h2 className="text-gray md-heading">Call</h2>
            <p>+910101010101</p>
        </div>
        <img src="https://placehold.co/400x400/6C3483/white?text=Company+Building" alt="Company Image"/>
    </div>
);

const ContactForm = () => (
    <form action="" className="form">
        <h1 className="lg-heading text-black">Contact Us</h1>
        <p className="text-gray">Let us know your questions, suggestions and concerns by filling out the contact form below.</p>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
        </div>
        <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" required />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
        </div>
        <button type="submit" className='form-btn'>Submit</button>
    </form>
);

const ContactFormSection = () => {
    return (
        <section className="contact-form">
            <div className="container">
                <div className="form-wrapper">
                    <CompanyAddress />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;