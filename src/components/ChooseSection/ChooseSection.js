import React from 'react';
import './ChooseSection.css';
// import Resizer from 'react-image-file-resizer';
import sp1 from '../../img/sp-1.jpg';
import sp2 from '../../img/sp-2.jpg';
import sp3 from '../../img/sp-3.jpg';
import sc1 from '../../img/sci-1.jpeg';
import sc2 from '../../img/sci-2.jpg';
import cul1 from '../../img/cul-1.jpg';
import cul2 from '../../img/cul-2.jpg';
import sc3 from '../../img/sci-3.jpeg';
import cul3 from '../../img/cul-3.jpeg';
const ChooseSection = () => {
  return (
    <div>
      <div className='container'>
        <h3>Annual Sports Day</h3>
        <img src={sp1} alt='asd1' className='sp1'/>
        <img src={sp2} alt='asd2' className='sp2'/>
        <img src={sp3} alt='asd3' className='sp3'/>

        <h3>Science Exhibition</h3>
        <img src={sc1} alt='asc1' className='sc1'/>
        <img src={sc2} alt='asc2' className='sc2'/>
        <img src={sc3} alt='asc3' className='sc3'/>

        <h3>Cultural Fest</h3>
        <img src={cul1} alt='cult1' className='cul1'/>
        <img src={cul2} alt='cult2' className='cul2'/>
        <img src={cul3} alt='cult3' className='cul3'/>

      </div>
    </div>
  )
}

export default ChooseSection
