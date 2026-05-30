import React from 'react';
import './Imagery.scss';

const Imagery = () => {
    return (
        <div className='ImageryContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>4.</span> Imagery</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        <p>Images play a key role in communicating care, trust, and reassurance. In a healthcare setting, imagery should support the user emotionally while helping them better understand the context. Photography and visuals should feel human, calm, and relevant adding meaning without overwhelming the user.</p>
                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">PRINCIPLES</div>
                        <div className="twocolumntext" style={{ paddingBottom: '20px', borderBottom: '1px solid' }}>                            <div>
                            <ul className="bullets">
                                <li><b>Hopeful & Positive</b><br />We avoid sad or distressing visuals. Images should feel uplifting, calm, and reassuring.</li>
                                <li><b>Human & Relatable</b><br />Use real, everyday moments that patients and caregivers can relate to.</li>
                                <li><b>Indian Context</b><br />Prioritise Indian faces, environments, and cultural context to ensure familiarity and inclusivity.</li>
                            </ul>
                        </div>
                            <div>
                                <ul className="bullets">
                                    <li><b>Respectful & Dignified</b><br />Depict patients and caregivers with respect. Avoid portraying vulnerability in a way that feels uncomfortable or intrusive.</li>
                                    <li><b>Clean & Calm</b><br />Maintain a light, uncluttered visual style that supports clarity and ease.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                        <p>Before using imagery, consider:</p>
                        <ul className='bullets'>
                            <li>What emotion should this image convey? (e.g., trust, hope, reassurance)</li>
                            <li>Does this image support the user's journey or understanding?</li>
                        </ul>
                        <p>Please follow these guidelines when selecting and using imagery.</p>

                    <section>
                        <div className="titlebdr mrgbtm">EXAMPLES</div>
                        <div className='example-images-grid'>
                            <div className='example-images'>
                                <div>
                                    <img src={require('../../../Assets/Images/imagery-image-1.webp')} alt="" />
                                    <img src={require('../../../Assets/Images/imagery-image-2.webp')} alt="" />
                                    <img src={require('../../../Assets/Images/imagery-image-3.webp')} alt="" />
                                </div>
                                <div>
                                    <img src={require('../../../Assets/Images/imagery-image-4.webp')} alt="" />
                                </div>
                                <div>
                                    <img src={require('../../../Assets/Images/imagery-image-5.webp')} alt="" />
                                    <img src={require('../../../Assets/Images/imagery-image-6.webp')} alt="" />
                                </div>
                                <div>
                                    <img src={require('../../../Assets/Images/imagery-image-7.webp')} alt="" />
                                    <img src={require('../../../Assets/Images/imagery-image-8.webp')} alt="" />
                                    <img src={require('../../../Assets/Images/imagery-image-9.webp')} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="do-donts">
    <div className="titlebdr">GUIDELINES</div>
    
    <div className="titlebg">Do's</div>
    <div className="twocolumntext">
        <div>
            <ul className="bullets">
                <li>Use imagery that feels hopeful, calm, and reassuring</li>
                <li>Show real, human interactions (doctor–patient, caregiver support)</li>
                <li>Use Indian faces and local contexts to ensure relatability</li>
                <li>Choose natural, candid moments over staged visuals</li>
            </ul>
        </div>
        <div>
            <ul className="bullets">
                <li>Ensure images are relevant to the content they support</li>
                <li>Maintain clean, well-lit environments</li>
                <li>Use imagery that adds meaning, not just decoration</li>
            </ul>
        </div>
    </div>
    
    <div className="titlebg red">Don'ts</div>
    <div className="twocolumntext">
        <div>
            <ul className="bullets">
                <li>Don't use sad, distressing, or fear-inducing images</li>
                <li>Don't show graphic medical procedures or discomfort</li>
                <li>Don't use overly staged or artificial stock photos</li>
                <li>Don't use non-representative or foreign contexts</li>
            </ul>
        </div>
        <div>
            <ul className="bullets">
                <li>Don't use low-quality, pixelated, or poorly lit images</li>
                <li>Don't include visuals that feel invasive or disrespectful</li>
                <li>Don't use imagery that does not add value to the content</li>
            </ul>
        </div>
    </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Imagery;