import React from "react"
import "./Contact.css"

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='terminal'>
        <div className='terminal-header'>
          <div className='terminal-header-options'>
            <div
              className='terminal-option-btn'
              style={{ background: "red" }}
            ></div>
            <div
              className='terminal-option-btn'
              style={{ background: "orange" }}
            ></div>
            <div
              className='terminal-option-btn'
              style={{ background: "green" }}
            ></div>
          </div>
          <div className='terminal-title'>Contact</div>
        </div>
        <div className='terminal-body'>
          <div className='body-date-line'>
            Current login :{" "}
            <span className='data-console'> {new Date().toUTCString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
