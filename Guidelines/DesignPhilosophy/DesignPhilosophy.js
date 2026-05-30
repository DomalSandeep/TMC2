import React from 'react';
import './DesignPhilosophy.scss';

const DesignPhilosophy = () => {
  return (
  <>
    <div className='page-content'>
      <div className='container'>
      <h1><span>01.</span> Design philosophy</h1>
        <section>          
          <figure>
            <img src={require('../../../Assets/Images/vast.svg').default} alt="" />
          </figure>
        </section>

        <section>
          <h2>Vast</h2>
          <p><strong>“The entire world we apprehend through our senses is no more than a tiny fragment in the vastness of Nature.” - Max Planck</strong></p>
          <p>The design system proposes using expansive and open, nature inspired imagery (the sky, sea, mountains, etc.) to evoke a feeling of vastness.</p>          
          <div className='banner-row'>
            <div className='banner-col'>
              <img src={require('../../../Assets/Images/vast_banner-01.jpg')} alt="" />
            </div>
            <div className='banner-col'>
              <img src={require('../../../Assets/Images/vast_banner-02.jpg')} alt="" />
            </div>
          </div>
          <div className='banner-wrapper'>
          <img src={require('../../../Assets/Images/vast_banner-03.jpg')} alt="" />
          </div>
        </section>

        <section>
          <h2>Diverse</h2>
          <p><strong>“Diversity is about all of us and about us having to figure out how to walk through this world together.” Jacqueline Woodson</strong></p>
          <p>The design system proposes using imagery that showcases people of different races, gender and ages. Beyond imagery, diversity must also be showcased by using content that presents multiple points of view.</p>
          <div className='pinterest-board'>
          <img src={require('../../../Assets/Images/diverse_pinterest-board-01.jpg')} alt="" />
          </div>
          <div className='pinterest-board'>
          <img src={require('../../../Assets/Images/diverse_pinterest-board-02.jpg')} alt="" />
          </div>
          <div className='tags-section'>
          <img src={require('../../../Assets/Images/diverse_tags.svg').default} alt="" />
          </div>
        </section>

        <section className='bottom-space'>
          <h2>Vibrant</h2>
          <p><strong>“Life is a sea of vibrant color. Jump in.” - A.D. Posey</strong></p>
          <p>The design system proposes using imagery that showcases vibrant instances of life at the Art of Living ashrams, events and celebrations. Beyond imagery, vibrance must also be showcased by using asymmetric card layouts that break the monotony of the interface. </p>
          <div className='banner-wrapper'>
          <img src={require('../../../Assets/Images/vibrant_banner-01.jpg')} alt="" />
          </div>
          <div className='banner-row'>
            <div className='banner-col'>
            <img src={require('../../../Assets/Images/vibrant_banner-02.jpg')} alt="" />
            </div>
            <div className='banner-col'>
            <img src={require('../../../Assets/Images/vibrant_pinterest-board-01.jpg')} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
)};
export default DesignPhilosophy;
