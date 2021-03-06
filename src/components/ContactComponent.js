import React from 'react';

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 m-1 text-center">
                    <h3>Contact Us</h3>
                    <div className="form-group">
                        <form className="form-contact">
                            <input className="m-1" placeholder="Name" /><br />
                            <input className="m-1" placeholder="Email" /><br />
                            <input className="m-1" placeholder="Phone" /><br />
                            <textarea className="m-1" placeholder="Your Request"></textarea><br />
                            <button className="m-1" href="mailto:dallas.mockridge@yahoo.com">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-5 m-1 text-center">
                    <h3>Location</h3>
                    <div className="row">
                        <div className="col">
                            <div className="address">
                                <p>123 Made up street</p>
                                <p>Midland, MI</p>
                                <p>48640</p>
                            </div>
                            <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                            <a role="button" className="btn btn-link" href="mailto:"><i className="fa fa-envelope-o" />info@benezrafloors.com</a>
                            <p>Monday-Friday</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;