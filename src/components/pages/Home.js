import React, { useState } from 'react'
import './Home.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { IconButton } from '@material-ui/core'

export const Home = () => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      className='app wrapper'
      id='main'
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
        <div className='home-section-1'>
          <div className='main-home-body'>
            <p className='line-1'>
              I wanna build <br />
              things
              <span> that make a difference</span>
            </p>

            <p className='line-2'>Student & Full Stack Developer</p>
            <button
              className='home-more-btn'
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              View my work {''}
              {!isHover ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
          </div>
          <div className='link-logos-section'>
            <div class='link-logo'>
              <IconButton>
                <GitHubIcon fontSize='large' style={{ color: 'white ' }} />
              </IconButton>
            </div>
            <div class='link-logo'>
              <IconButton>
                <LinkedInIcon fontSize='large' style={{ color: 'white ' }} />
              </IconButton>
            </div>
            <div class='link-logo'>
              <IconButton>
                <TwitterIcon fontSize='large' style={{ color: 'white ' }} />
              </IconButton>
            </div>
            <div class='link-logo'>
              <IconButton>
                <InstagramIcon fontSize='large' style={{ color: 'white ' }} />
              </IconButton>
            </div>
            <div class='link-logo'>
              <IconButton>
                <FacebookIcon fontSize='large' style={{ color: 'white ' }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
