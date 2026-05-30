import React from 'react';
import './CardList.scss';

const CardList = () => {
    return (
        <div className='CardListContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>3.2</span> Information Pages - Card List Page</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>The Card List Page is designed to present structured informational content through stacked or grouped cards, making complex processes, instructions, or step-based information easier to scan, understand, and navigate.</p>
                    </section>
                    
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className='bullets nospace'>
                            <li>Present structured information in modular sections</li>
                            <li>Simplify instructional or process-driven content</li>
                            <li>Improve scan ability for long informational journeys</li>
                            <li>Support task-oriented reading experiences</li>
                            <li>Surface supporting actions and contextual resources</li>
                        </ul>
                        <div className="infoBox">
                            <div className="boldtxt">Some instances of usage</div>
                            <ul className='bullets nospace'>
                                <li>In information pages like—doctor visit process, other inner pages</li>
                            </ul>
                        </div>
                    </section>
                    
                    <section>
                        <div className="titlebdr">VARIANTS</div>
                        <div className='imageWrap'>
                            <img src={require('../../../Assets/Images/information-pages-card-list.webp')} alt="" />
                        </div>
                    </section>
                    
                    <div className="do-donts">
                        <div className="titlebdr">GUIDELINES</div>
                        
                        <div className="titlebg">Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Structure content into digestible sections</li>
                                    <li>Keep related links contextually relevant</li>
                                    <li>Prioritise readability and spacing</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Use visual hierarchy consistently across sections</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="titlebg red">Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className="bullets">
                                    <li>Don't overload pages with excessive media</li>
                                    <li>Don't use unrelated or decorative imagery</li>
                                    <li>Don't create long uninterrupted text blocks</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Don't overcrowd the related links panel</li>
                                    <li>Don't mix inconsistent content structures within the same page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardList;