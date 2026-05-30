import React from 'react';
import './GridsAndSpacing.scss';


const GridsAndSpacing = () => {
    return (
        <div className='GridsAndSpacing'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>7.</span>  Grids and Spacing</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <section className='padtp2'>
                        The primary goal of grid is to create a visual rhythm in the interface. It provides a base structure to which the page payout can adhere to. This also ensures a more responsive layout.
                    </section>
                    <section>
                        <div className="titlebdr mrgbtm">SPATIAL SYSTEM</div>
                        <p>A spatial system is a set of rules and guidelines on how to size and space the elements on the screen. Following a spatial system makes the product visually consistent and organised.</p>
                        <div className="grid-system">
                            <div className="grid-description">
                                <p><strong>A base unit</strong></p>
                                <p>A base unit is the smallest unit that will be used to scale, size and space elements. All the relevant sizes and spacings should be in increments of the base unit. Using a 4-point grid system means that we use multiple/increments of 4 for spacing and sizing of elements. Any spacing and sizing specification that is being 'defined' should be divisible by 4. This includes padding and margins.</p>
                            </div>
                            <div className="grid-visual">
                                <img src={require('../../../Assets/Images/grid-and-space-image-1.webp')} alt="" />
                            </div>
                        </div>



                    </section>

                    <section>
                        <div className="titlebdr mrgbtm">GRID LAYOUT</div>
                        <p>While the sizing and spacing is dictated by the spatial system, the arrangement and structuring of the content depends on the grid system being followed. Following a system like this ensures there is visual heirarchy on the page and better readability of the content.</p>
                        <p>A responsive layout grid consists of three components: columns, gutters, and margins.</p>

                        <div className='pt-28' ><strong>Columns   </strong>
                            <p>A base unit is the smallest unit that will be used to scale, size and space elements. All the relevant sizes and spacings should be in increments of the base unit. Using a 4-point grid system means that we use multiple/increments of 4 for spacing and sizing of elements. Any spacing and sizing specification that is being 'defined' should be divisible by 4. This includes padding and margins.</p>
                        </div>
                        <div className='pt-28' ><strong>Gutters</strong>
                            <p>The space between two columns of a grid is defined as 'gutter'. Gutters are fixed values. We use gutters that are 16px in size.</p>
                        </div>
                        <div className='pt-28' ><strong>Margins</strong>
                            <p>The space between page content and the edge of the page is the margin. In other words, the space between the edge and the beginning of the first column and the end of the last column is defined as the margin.</p>
                        </div>
                        <div className='py-28'>
                            <p>The margin changes depending on the screen size, but stays consistent throughout each screen size.</p>
                            <ul style={{ listStyle: 'none' }}>
                                <li>Desktop – 60px</li>
                                <li>Mobile – 20px</li>
                            </ul>
                        </div>
                        <img className='full-width' src={require('../../../Assets/Images/grid-and-space-image-2.webp')} alt="" />
                    </section>

                    <section>
                        <h2>Spacing</h2>
                        <div className='spacing-images pt-28'>


                            <img className='full-width' src={require('../../../Assets/Images/grid-and-space-image-3.webp')} alt="" />

                        </div>
                    </section>

                    <section>
                        <div className="do-donts">
                            <div className="titlebdr">GUIDELINES</div>

                            <div className="titlebg">Do's</div>
                            <div className="twocolumntext">
                                <div>
                                    <ul className="bullets">
                                        <li>Maintain consistent margins and padding</li>
                                        <li>Ensure text, images, and components align vertically and horizontally.</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="bullets">
                                        <li>Use whitespace intentionally by allowing enough breathing space to improve readability and focus.</li>
                                        <li>Adapt spacing for different screen sizes</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="titlebg red">Don'ts</div>
                            <div className="twocolumntext">
                                <div>
                                    <ul className="bullets">
                                        <li>Don't use random spacing values</li>
                                        <li>Don't overcrowd layouts by keeping less spacing, it reduces readability and usability.</li>
                                        <li>Don't overuse whitespace, excessive spacing can disconnect related elements.</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="bullets">
                                        <li>Don't break grid alignment, misaligned elements create visual inconsistency.</li>
                                        <li>Don't mix multiple spacing patterns.</li>
                                        <li>Don't ignore hierarchy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>                    </section>
                </div>
            </div>


        </div>
    );
};

export default GridsAndSpacing;