import React from 'react';

import './Gallery.css';
import sport from '../../img/sports_day.jpg';
import exhibition from '../../img/science_exhibition.jpg';
import fest from '../../img/cultural_fest.jpg';
import classroom from '../../img/classroom.jpg';
import library from '../../img/library.jpg';



function Gallery () {
  return (
    
    <div className='gallery-page'>
        <header className=' h-100 min-vh-100 d-flex align-items-center text-light'>
        <div class="row">
  <div class="column">
    <img src={sport} alt='sports' className='sprt'/>
    <img src={exhibition} alt='science' className='exh'/>
    <img src={fest} alt='cultural' className='cultur'/>
    <img src={classroom} alt='room' className='cls'/>
    <img src={library} alt='book' className='lib'/>
  </div>
  </div>
     
        </header>
        
    </div>
    
  )
}

export default Gallery
