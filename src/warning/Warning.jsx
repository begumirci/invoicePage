import React from 'react'
import './warn.css';

export default function Warning() {
  return (
  
   <div className='little-cart'>
          <h3 className='text7 color-black'>Confirm Deletion</h3>
          <div className='text5 color-grey'>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</div>
          <div className='warn-btns'>
              <button className='button2 text4 btn-property'>Cancel</button>
              <button className='button3 text4 btn-property'>Delete</button>
          </div>
   </div>
      
  )
}
