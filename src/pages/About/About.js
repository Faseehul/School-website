import React from 'react';
import './About.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Cls from '../../img/class.jpg';
import gym from '../../img/gym.jpg';
import sclab from '../../img/sc-lab.jpg';
import complab from '../../img/com-lab.jpg';
import lib from '../../img/lib.jpg';




function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
            <h1 className='text-center fw-semibold'>About Us</h1>
            <br/>
            <h2>History</h2>
            <p className='text-center w-75'>Founded in 1985, Springdale Public School has been dedicated to providing 
               quality education and holistic development to students.</p>
            </div>
        </header>
        <br/>
        <br/>
        <div className='vision-text'>
            <h2>Vision</h2>
            <p>To create a learning environment that fosters academic excellence, 
                                            critical thinking, and ethical values</p>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='Mission-text'>
                <h2>Mission</h2>
                <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='message'>
                <h2>Principal's Message</h2>
                <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='facilities'>
                <h2>Infrastructure and Facilities</h2>
                <div className='container'>
                    <img src = {sclab} alt='sclab' className='lab1'/>
                    <div className='text-block'>
                        <p>State-of-the-art science and computer labs</p>
                    </div>
                </div>
                <div className='container'>
                    <img src = {complab} alt='cmlab' className='lab2'/>
                    <div className='text-block2'>
                        <p>State-of-the-art science and computer labs</p>
                    </div>
                </div>
                <div className='container'>
                    <img src = {lib} alt='lib' className='libr'/>
                    <div className='text-block3'>
                        <p>Library with a vast collection of books and digital resources</p>
                    </div>
                </div>
                <div className='container'>
                    <img src = {gym} alt='sports' className='gym1'/>
                    <div className='text-block4'>
                        <p>Sports facilities including a playground, gymnasium, <br/> and swimming pool</p>
                    </div>
                </div>
                <div className='container'>
                    <img src = {Cls} alt='class' className='class'/>
                    <div className='text-block5'>
                        <p>Spacious and well-equipped classrooms</p>
                    </div>
                </div>

            </div>

        </div>
  )
}

export default About
