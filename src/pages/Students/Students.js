import React from 'react';
import './Students.css';
import maths from '../../img/math-oly.jpg';
import swim from '../../img/swim-award.jpg';
import tech from '../../img/tech-winner.jpg';
import parker from '../../img/amy.jpeg';
import mehta from '../../img/rajiv.jpg';
import wong from '../../img/lisa.jpeg';
import mus from '../../img/music.jpg';
import sprt from '../../img/sports.jpg';
import paint from '../../img/art.jpg';
import club1 from '../../img/coding.jpg';
import dan from '../../img/dance.jpg';
import club2 from '../../img/enviro.jpg';
import acting from '../../img/drama.jpg';
const Students = () => {
  return (
    <div className='students-page'>

    <header>
<div class="row">
    <h1>Achievements</h1>
  <div class="column">
    <div class="card">
      <img src={maths} alt="john" className='matholym'/>
      <div class="container">
        <h2>John Smith</h2>
        <h4>WINNER</h4>
        <p>National Level Math Olympiad</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={swim} alt="lee" className='swimchamp'/>
      <div class="container">
        <h2>Sarah Lee</h2>
        <h4>Gold Medalist</h4>
        <p>State Swimming Championship</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={tech} alt="club" className='techinno'/>
      <div class="container">
        <h2>Tech Innovators Club</h2>
        <h4>WINNER</h4>
        <p>Inter-School Robotics Competition</p>
      </div>
    </div>
  </div>
</div>


<div class="row">
    <h1 className='councils'>Student Councils</h1>
  <div class="column">
    <div class="card">
      <img src={parker} alt="amy" className='pres'/>
      <div class="container">
        <h2>Amy Parker</h2>
        <h4>President</h4>
        <h5 className='grade'>Grade 12</h5>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={mehta} alt="rajiv" className='vice'/>
      <div class="container">
        <h2>Rajiv Mehta</h2>
        <h4>Vice President</h4>
        <h5 className='grade'>Grade 11</h5>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={wong} alt="lisa" className='sec'/>
      <div class="container">
        <h2>Lisa Wong</h2>
        <h4>Secretary</h4>
        <h5 className='grade'>Grade 10</h5>
      </div>
    </div>
  </div>
</div>
<div className='life'>
            <h1>Life at Springdale</h1>
        </div>
        <div class="container">
  <img src={mus} alt="kala" className='music'/>
  
  <img src={acting} alt="act" className='act'/>
  <img src={sprt} alt="sport" className='game'/>
  <img src={paint} alt="painting" className='draw'/>
  <img src={dan} alt="dance" className='steps'/>
  <h2 className='clubs'>Clubs and Societies</h2>
  <img src={club1} alt="code" className='coding'/>
  <img src={club2} alt="environment" className='evs'/>
  
  
</div>

        </header>      
    </div>
  )
}

export default Students
