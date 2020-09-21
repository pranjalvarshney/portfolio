import React from "react"
import "./Home.css"

export const Home = () => {
  return (
    <div
      className='wrapper'
      style={{
        backgroundImage: `url(${"./home-wall.jpg"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        opacity: "1",
      }}
    >
      <div className='home'>
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
            <div className='terminal-title'>www.pranjalvarshney.com</div>
          </div>
          <div className='terminal-body'>
            <div className='body-date-line'>
              Current login :{" "}
              <span className='data-console'> {new Date().toUTCString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
