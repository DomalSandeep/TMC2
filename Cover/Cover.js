import React from 'react';
import './Cover.scss';
import { Link } from "react-router-dom";


const Cover = () => (
  <>
    <div className='maincover-section'>
      <div className='cover-title'>
          <div>
            <h1>TATA Memorial Centre & Hospitals </h1>
           <h2>Web Design Standards</h2>
          </div>
          <div>
            <img src={require('../../Assets/Images/tmc-bg.webp')} alt="cover" />
          </div>
        </div>
      <div className='container'>
        
          <div className="title">
            
            <Link to={'/guidelines'}>GUIDELINES</Link><br />
            <Link to={'/core-page-type'}>Core Page Types</Link><br />
            <Link to={'/core-components'}>Core ComponentS</Link>
          </div>
      </div>
    </div>    
  </>
);

export default Cover;
