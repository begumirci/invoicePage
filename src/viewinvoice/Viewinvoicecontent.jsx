import React from 'react'
import Table from '../tables/Table'
import Viewinvoicerectangle from './Viewinvoicerectangle'

export default function Viewinvoicecontent() {
  return (
    <div className='table-content'>
      <div className='table-content-1'>
        <div className='text3'>
            <span className='color-Darkgrey'>#</span>
            <span className='color-black'>RT3080</span>
            <div className='text6 color-Darkgrey m7'>Graphic Design</div>
        </div>
        <div className='text5 color-Darkgrey' style={{width:88}}>
            19 Union Terrace
            London
            E1 3EZ
            United Kingdom
        </div>
        </div>
        <div className='content-flex-row'>
          <div className='content-flex-column'>
            <span className='color-Darkgrey text6'>Invoice Date</span>
            <span className='text3 color-black'>21 Aug 2021</span>
          </div>
          <div className='content-flex-column'>
            <span className='color-Darkgrey text6'>Bill To</span>
            <span className='text3 color-black'>Alex Grim</span>
          </div>
          <div className='content-flex-column'>
            <span className='color-Darkgrey text6'>Sent To</span>
            <span className='text3 color-black'>alexgrim@mail.com</span>
          </div>
        </div>
        <div className='content-flex-row m31'>
          <div className='content-flex-column'>
            <span className='color-Darkgrey text6'>Payment Due</span>
            <span className='text3 color-black'>20 Sep 2021</span>
          </div>
          <div className='text5 color-Darkgrey' style={{width:88,marginTop:7}}>
            84 Church Way
            Bradford
            BD1 9PB
            United Kingdom
          </div>
        </div>
      <Viewinvoicerectangle />
      </div>
    
  )
}
