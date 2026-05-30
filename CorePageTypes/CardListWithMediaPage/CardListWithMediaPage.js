import React from 'react';
import './CardListWithMediaPage.scss';

const CardListWithMediaPage = () => {
    return (
        <div className='CardListWithMediaPageContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>3.3</span> Information Pages - Card List with Media Page</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Card List with Media Page combines structured card-based information with supporting visual media to create a more engaging and informative browsing experience. It is designed for content that benefits from visual storytelling alongside modular informational blocks.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Present structured information supported by imagery or media</li>
                            <li>Improve engagement through visual storytelling</li>
                            <li>Simplify process-driven or informational content</li>
                            <li>Support discovery through modular card layouts</li>
                            <li>Surface supporting actions and related resources</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>In information pages like - Support groups, other inner pages</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrap'>
                            <img className='full-width' src={require('../../../Assets/Images/information-pages-card-list-with-media.webp')} alt="" />
                        </div>
                    </section>
                    
                    <div className="do-donts">
                        <div className="titlebdr">GUIDELINES</div>
                        
                        <div className="titlebg">Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Use media to enhance content comprehension and engagement</li>
                                    <li>Keep card layouts modular and easy to scan</li>
                                                                        <li>Maintain consistent image ratios and spacing across cards</li>

                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Use concise content and focused CTAs within cards</li>
                                                                        <li>Ensure media and content hierarchy remain balanced across layouts</li>

                                </ul>
                            </div>
                        </div>
                        
                        <div className="titlebg red">Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Don't overload cards with excessive text</li>
                                    <li>Don't use unrelated or decorative imagery</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Don't mix inconsistent card structures within the same section</li>
                                    <li>Don't rely solely on imagery to communicate important information</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardListWithMediaPage;