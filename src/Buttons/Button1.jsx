import '../index.css'
import plus from './btn-img/plus.svg'


import React from 'react'

export default function Button1() {
  return (
    <div>
          <button className='button1 text4'>
              <div>
                  <img src={plus} alt="" />
                  <span>New Invoice</span>
              </div>
          </button>
          
          <button className='button2 text4 btn-property'>Edit</button>
          <button className='button3 text4 btn-property'>Delete</button>
          <button className='button4 text4 btn-property'> Mark as Paid</button>
          <button className='button5 text4 btn-property'>Save as Draft</button>
          <button className='button6 text4 btn-property'>+ Add New Item</button>
          
    </div>
  )
}
