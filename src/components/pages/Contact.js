import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1 className='heading'>Contact</h1>
      <h4 className='tag-contact'>Have a question or want to work together?</h4>
      <form>
        <div className='form-group'>
          <input className='input-control' placeholder='Enter name' />
          <input className='input-control' placeholder='Enter email' />
          <textarea
            className='input-control'
            placeholder='Enter your message'
          />
          <button className='btn-submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
