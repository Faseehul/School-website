import React from 'react';
import './Academics.css';

const Academics = () => {
  return (
    <div className='Academics-page'>
        <header className=' h-100 min-vh-100 d-flex align-items-center text-light'>
        <div class="column">
      <div class="card">
      <div class="container1">
        <h2>Cirriculum</h2>
        <h5>Primary (Grades 1-5)</h5>
        <p> English, Mathematics, Science, Social Studies, Art, Physical Education</p>
        <h5>Secondary (Grades 6-10)</h5>
        <p> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
        <h5>Senior Secondary (Grades 11-12)</h5>
        <h6>Science Stream</h6>
        <p> Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
        <h6>Commerce Stream</h6>
        <p>  Accountancy, Business Studies, Economics, Mathematics, English</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="card">
        <div class="container1">
            <h4>Teaching Methodologies</h4>
            <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
            <h4>Educational Resources</h4>
            <p>Digital classrooms, interactive learning modules, and access to online educational platforms</p>
            
        </div>
    </div>
  </div>
        </header>

     
    </div>
  )
}

export default Academics
