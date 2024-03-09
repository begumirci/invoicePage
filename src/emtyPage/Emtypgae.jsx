import React from 'react'
import picture from './emt-img/picture.svg'
import Header from '../header/Header'
import './emty.css'

export default function Emtypgae() {
  return (
    <div className='container'>
      <Header />
      <div className='emty'>
              <img src={picture} alt="" style={{width:241}} />
              <div className='emty-page-info'>
                    <h1 className='text2 color-black'>There is nothing here</h1>
                    <span className='text6 color-grey' style={{width:193}}>Create an invoice by clicking the <span>New Invoice</span> button and get started</span>
                </div>
       </div>
        
    </div>
  )
}
