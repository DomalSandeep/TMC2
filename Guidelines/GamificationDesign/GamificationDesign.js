import React from 'react';
import './GamificationDesign.scss';

const GamificationDesign = () => {
    return (
        <div className='GamificationDesignContent'>
            <div className='page-content'>
                <div className="container">
                    <h1><span>11.</span> Gamification Design</h1>
                    <section>
                    Gamification is adding game mechanics into nongame environments to increase participation. The goal of gamification is to engage with consumers and to inspire collaborate, share and interact. A compelling gamification experience taps into a participant’s emotions and demonstrates, easily, the best activities an audience can complete that make an impact on mutually shared goals.
                    <br /><br />
                    <img src={require('../../../Assets/Images/gamification-design.png')} alt=""/>
                    <br /><br /><br />
                    <div className='titlebdr'>GUIDELINES</div>
                    <div className='titlebg'>Do's</div>
                    <div className="twocolumntext">
                        <div>
                            <ul className='bullets'>
                                <li>Define goals and objectives</li>
                                <li>Align gamification to objectives</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='bullets'>
                                <li>Reduce cognitive load</li>
                                <li>Show their progress all the time</li>
                            </ul>
                        </div>
                    </div>
                    <div className='titlebg red'>Don'ts</div>
                    <div className="twocolumntext">
                        <div>
                            <ul className='bullets'>
                                <li>Don’t gamify everything</li>
                                <li>Don’t have the same learner paths</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='bullets'>
                                <li>Don’t forget to define rules and tasks</li>
                                <li>Don’t use the wrong gamification features</li>
                            </ul>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GamificationDesign;