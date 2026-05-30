import React from 'react';
import './LogoUsage.scss';

const LogoUsage = () => (
  <div className='LogoUsage'>
    <div className='page-content'>
      <div className='container'>
        <h1><span>02.</span> Logo Usage</h1>
        <section>          
          <h2>Identity</h2>
          <div className='logo-wrapper'>
            <img src={require('../../../Assets/Images/aol-logo.svg').default} alt="" />
          </div>
        </section>
        <section>
          <h2>Identity for dark background</h2>
          <div className='logo-wrapper dark-bg'>
            <img src={require('../../../Assets/Images/aol-logo-white.svg').default} alt="" />
          </div>
        </section>
        <section>
          <h2>Logo size for web</h2>
          <p>Establishing a minimum size ensures that the impact and legibility of the logo aren’t compromised.</p>
          <div className='logo-wrapper'>
            <img src={require('../../../Assets/Images/aol-logo-white-dimension.png')} alt="" />
          </div>
        </section>
        <section>
          <h2>Identity Monogram</h2>
          <p>Establishing a minimum size ensures that the impact and legibility of the logo aren’t compromised.</p>
          <div className='logo-wrapper'>
            <img src={require('../../../Assets/Images/identity-monogram.png')} alt="" className='wid100' />
          </div>
        </section>
        <section>
          <h2>Exclusion Zone</h2>
          <p>The exclusion zone ensures the visibility and prominence of the logo. Leave a clear space area around the logo and isolate it from competing with visual elements such as text and supporting graphics.</p>
          <div className='logo-wrapper'>
            <img src={require('../../../Assets/Images/exclusive-zone.png')} alt="" />
          </div>
        </section>
        <section>
          <h2>Dont’s</h2>
          <div className='logo-wrapper'>
            <img src={require('../../../Assets/Images/dont-logo-1.png')} alt="" className='wid100 mrgtbm' />
            <img src={require('../../../Assets/Images/dont-logo-2.png')} alt="" className='wid100 mrgtbm' />
            <img src={require('../../../Assets/Images/dont-logo-3.png')} alt="" className='wid100 mrgtbm' />
          </div>
        </section>
      </div>
    </div>
  </div>
);
export default LogoUsage;
