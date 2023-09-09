import React from 'react';

function Contact() {
return (
    <div className="container mt-4"> {/* Add Bootstrap container class */}
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h1 className="display-4">Contact Us</h1>
                <p className="lead">
                Have questions or feedback? Reach out to us!
                {/* Add more content */}
                </p>
            </div>
        </div>
    </div>
);
}

export default Contact;
