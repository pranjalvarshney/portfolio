import React from 'react'
import './About.css'

export const About = () => {
  return (
    <div className='about' id='about'>
      <h1 className='heading'>About</h1>
      <div className='about-content-wrapper'>
        <div className='about-image-wrapper'>
          <img
            src='https://avatars3.githubusercontent.com/u/36803450?s=460&v=4'
            alt='profile - pranjal varshney'
            className='about-image'
          />
        </div>
        <div className='about-content'>
          <h1>Who's this guy?</h1>
          <p>
            I'm Pranjal Varshney, a MERN Stack Developer, currently studying
            Computer Science at Gautam Buddha University, India. I have serious
            passion for building and creating web and mobile applications, with
            dynamic user experiences.
          </p>
          <div className='about-more-details'>
            <p style={{ fontWeight: '500', fontSize: '16px' }}>
              Skills :{' '}
              <span style={{ color: 'grey' }}>
                HTML | CSS | JQuery | Javascript | Reactjs | Nodejs | Flutter |
                Python | C++ | MongoDB | MySQL | Git
              </span>
            </p>
            <p style={{ fontWeight: '500', fontSize: '16px' }}>
              Languages :{' '}
              <span style={{ color: 'grey' }}> English | Hindi | French</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
