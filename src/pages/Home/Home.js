import React from 'react';
import './Home.css';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

const Home = () => {
  return (
    <div className='home-page'>
      <header className=' h-100 min-vh-100 d-flex align-items-center text-light'>
        <div className='container d-flex flex-column align-items-center'>
          <h2>Welcome To</h2>
          <h1 className='text-center'>Springdale Public School</h1>
          <h5>Where we nurture young minds for a brighter future.</h5>
        </div>
      </header>
      <div className='py-5'>
        <ChooseSection />
      </div>
      
    </div>
  )
}

export default Home
