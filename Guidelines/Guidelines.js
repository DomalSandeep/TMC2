import React from 'react';
import { Link } from "react-router-dom";


const Guidelines = () => {
    return (
        <>
    <div className='cover-section'>
      <div className='container'>
        <div className="columns">
          <div>
            <h1>TATA Memorial Centre & Hospitals</h1>
            <h2>Web Design Standards</h2>
            <div className="title">
              GUIDELINES
            </div>
          </div>
          <div className='navigation'>
            <Link to={'/guidelines/palettes'}>1. Palettes</Link>
            <Link to={'/guidelines/typography'}>2. Typography</Link>
            <Link to={'/guidelines/tone-of-voice'}>3. Tone of voice</Link>
            <Link to={'/guidelines/imagery'}>4. Imagery</Link>
            <Link to={'/guidelines/navigation'}>5. Navigation </Link>
            <Link to={'/guidelines/responsive-design'}>6. Responsive design</Link>
            <Link to={'/guidelines/grids-and-spacing'}>7. Grids and Spacing</Link>



            
          </div>
        </div>
      </div>
    </div>    
  </>
    );
};

export default Guidelines;