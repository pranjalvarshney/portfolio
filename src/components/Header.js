import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-wrapper'>
        <p>pranjal varshney</p>
        <ul className='header-list'>
          <li className='header-li'>
            <Link to='/'>Home</Link>
          </li>
          <li className='header-li'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='header-li'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='header-li'>
            <Link to='/blogs'>Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
