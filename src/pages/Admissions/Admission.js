import React from 'react';
import './Admission.css';
import adm from '../../img/admission-open.png';

const Admission = () => {
  return (
    <div className='admission-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            
            
            <div className='column5'>
                <div className='card'>
                    <div className='container2'>
                        <img src ={adm} alt='admlogo' className='nowlogo'/>
                        <h6>Process</h6>
                        <p>Admission forms are available for download. 
                           Submit<br/> the completed form along with required documents at the school office.</p>
                           <h6>Criteria</h6>
                        <p>Admission is based on merit and availability of seats. 
                            Entrance<br/> tests may be conducted for certain grades.</p>
                           <h6>Important Dates</h6>
                        <p>Admission Form Availability: March 1st<br/>
                          Last Date for Submission: March 31st<br/>
                          Entrance Test: April 15th<br/>
                          Announcement of Results: April 30th</p>
                    </div>
                </div>

            </div>
        </header>
      
    </div>
  )
}

export default Admission
