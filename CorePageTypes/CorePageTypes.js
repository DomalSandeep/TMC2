import React from 'react';
import { Link } from "react-router-dom";

const CorePageTypes = () => {
    return (
        <>
    <div className='cover-section'>
      <div className='container'>
        <div className="columns">
          <div>
            <h1>TATA Memorial Centre & Hospitals</h1>
            <h2>Web Design Standards</h2>
            <div className="title">
                Core Page Types
            </div>
          </div>
          <div className='navigation'>
            <Link to={'/core-page-type/home-page'}>1. Home Page</Link>
            <Link to={'/core-page-type/section-landing-page'}>2. Section landing page</Link>
            <Link to={'/core-page-type'}>3. Information pages</Link>
              
                  <Link className='sub-menu' to={'/core-page-type/text-with-media-page'}>3.1 Text with media page</Link>
                  <Link className='sub-menu' to={'/core-page-type/card-list-page'}>3.2 Card list page</Link>
                  <Link className='sub-menu' to={'/core-page-type/card-list-with-media-page'}>3.3 Card list with media page</Link>
                  <Link className='sub-menu' to={'/core-page-type/accordion-list-page'}>3.4 Accordion list page</Link>
            <Link to={'/core-page-type/table-pages'}>4. Table page</Link>
            <Link to={'/core-page-type/grid-of-cards'}>5. Grid of cards</Link>
            <Link to={'/core-page-type/forms'}>6. Form page</Link>
            <Link to={'/core-page-type/preview-page'}>7. Preview page</Link>
            <Link to={'/core-page-type/success-page'}>8. Success page</Link>
            <Link to={'/core-page-type/choose-interstitial-page'}>9. Interstitial page</Link>
            <Link to={'/core-page-type/search-results'}>10. Search Results</Link>
          </div>
        </div>
      </div>
    </div>    
  </>
    );
};

export default CorePageTypes;