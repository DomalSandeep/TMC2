import React from 'react';
import './AccordionListPage.scss';

const AccordionListPage = () => {
    return (
        <div className='AccordionListPageContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>3.4</span> Information Pages - Accordion List Page</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Accordion List Page is designed for dense informational content that needs to remain organised, scannable, and progressively disclosed. It uses expandable accordion sections to reduce visual clutter while allowing users to explore detailed information only when required.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Organise large amounts of structured information</li>
                            <li>Reduce visual overload through progressive disclosure</li>
                            <li>Improve scan ability for content-heavy pages</li>
                            <li>Support expandable document and resource listings</li>
                            <li>Help users navigate grouped informational content efficiently</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>Policy documents, FAQs, downloadable resources, structured records, and content-heavy informational pages.</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrap'>
                            <img className='full-width' src={require('../../../Assets/Images/information-pages-accordion-list.webp')} alt="" />
                        </div>
                    </section>
                    
                    <div className="do-donts">
                        <div className="titlebdr">GUIDELINES</div>
                        
                        <div className="titlebg">Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Use accordions to simplify dense informational content</li>
                                    <li>Keep section labels short and descriptive</li>
                                    <li>Group related information logically</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Maintain consistent spacing and accordion behaviour</li>
                                    <li>Use progressive disclosure to reduce cognitive overload</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="titlebg red">Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Don't overload individual accordion sections with excessive content</li>
                                    <li>Don't nest too many accordion levels within each other</li>
                                    <li>Don't use vague or unclear accordion titles</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Don't force users to expand every section to find key information</li>
                                    <li>Don't mix unrelated content types within the same accordion group</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionListPage;