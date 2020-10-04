import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Avatar } from '@material-ui/core'

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-wrapper'>
        <div className='avatar-header'>
          <Avatar src='https://avatars3.githubusercontent.com/u/36803450?s=460&v=4' />
          <p>Pranjal Varshney</p>
        </div>
        <ul className='header-list'>
          <li className='header-li'>
            <Link to='/'>Home</Link>
          </li>
          <li className='header-li'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='header-li'>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li className='header-li'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
