import React from 'react';
import './Forms.scss';

const Forms = () => {
    return (
        <div className='FormsContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>6.</span> Forms</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Forms Page is designed to support structured data collection, registrations, enquiries, applications, and transactional workflows across the platform. It guides users through input-heavy journeys using clear hierarchy, supportive information, and progressive interactions to reduce cognitive load and improve completion rates.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Collect structured user information</li>
                            <li>Support registrations, applications, and enquiries</li>
                            <li>Guide users through step-based workflows</li>
                            <li>Reduce friction in high-input journeys</li>
                            <li>Provide contextual assistance and clarity throughout the process</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>Donations</li>
                                <li>Registrations</li>
                                <li>Booking appointment</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrap mrgtp20'>
                            <img className='full-width' src={require('../../../Assets/Images/forms-page.webp')} alt="" />
                        </div>
                    </section>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Forms;