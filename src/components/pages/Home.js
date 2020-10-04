import React from 'react'
import './Home.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

export const Home = () => {
  return (
    <div
      className='wrapper'
      style={{
        backgroundImage: `url(${'./home-wall.jpg'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: 'center',
        opacity: '1',
      }}
    >
      <div className='home'>
        <div className='main-home-body'>
          <p className='line-1'>
            I wanna build <br />
            things
            <span> that make a difference</span>
          </p>

          <p className='line-2'>Student & Full Stack Developer</p>
          <button className='home-more-btn'>View my work</button>
        </div>
        <div className='link-logos-section'>
          <div class='link-logo'>
            <GitHubIcon fontSize='large' />
          </div>
          <div class='link-logo'>
            <LinkedInIcon fontSize='large' />
          </div>
          <div class='link-logo'>
            <TwitterIcon fontSize='large' />
          </div>
          <div class='link-logo'>
            <InstagramIcon fontSize='large' />
          </div>
          <div class='link-logo'>
            <FacebookIcon fontSize='large' />
          </div>
        </div>
      </div>
    </div>
  )
}
