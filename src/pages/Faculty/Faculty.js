import React from 'react'
import './Faculty.css';
import fac1 from '../../img/t-1.jpg';
import fac2 from '../../img/t-2.jpg';
import fac3 from '../../img/t-3.jpg';
import fac4 from '../../img/t-4.jpg';
import fac5 from '../../img/t-5.jpg';
import fac6 from '../../img/t-6.jpg';
import fac7 from '../../img/t-7.jpg';

const Faculty = () => {
  return (
    <div className='faculty-page'>
    <header>
    <div className='row'>
        <h1>Faculty</h1>
        <div className='column'>
            <div className='card'>
                <img src={fac5} alt='doe' className='t1'/>
                <div className='container'>
                    <h2>John Doe</h2>
                    <h4>Principal</h4>
                    <p> M.Ed, <br/>20 years of experience in educational administration.</p>
                </div>
            </div>
        </div>
        
        <div className='column'>
            <div className='card'>
                <img src={fac2} alt='jane' className='t2'/>
                <div className='container'>
                    <h2>Jane Smith</h2>
                    <h4>Vice Principal</h4>
                    <p>M.Sc in Physics, <br/>15 years of teaching experience.</p>
                </div>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src={fac4} alt='emily' className='t3'/>
                <div className='container'>
                    <h2>Emily Johnson</h2>
                    <h4>English Teacher</h4>
                    <p>M.A, <br/>in English, 10 years of teaching</p>
                </div>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src={fac7} alt='davis' className='t4'/>
                <div className='container'>
                    <h2>Sophia Davis</h2>
                    <h4>Science Teacher</h4>
                    <p>M.Sc, <br/> in Chemistry, 12 years of teaching experience..</p>
                </div>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src={fac6} alt='brown' className='t5'/>
                <div className='container'>
                    <h2>Michael Brown</h2>
                    <h4>Mathematics Teacher</h4>
                    <p>M.sc, <br/> in Mathematics, 8 years of teaching experience.</p>
                </div>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src={fac1} alt='david' className='t6'/>
                <div className='container'>
                    <h2>David Wilson</h2>
                    <h4>Computer Science Teacher</h4>
                    <p>B.Tech, Computer Science, <br/>5 years of teaching experience.</p>
                </div>
            </div>
        </div>
      
    </div>
    </header>
    </div>
  )
}

export default Faculty
