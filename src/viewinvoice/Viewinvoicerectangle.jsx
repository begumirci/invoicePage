import React from 'react'

export default function Viewinvoicerectangle() {
  return (
   <>
    <div className='rectangle-yatay'>
        <div className='table-content-rectangle'>
            <ul className='flex ulgap text5 color-Darkgrey'>
                <li>İtem Name</li>
                <li>QTY.</li>
                <li>Price</li>
                <li>Total</li>
            </ul>
            <ul className='flex ulgap text4'>
                <li className='color-black'>Banner Design</li>
                <li className='color-Darkgrey'>1</li>
                <li className='color-Darkgrey'>£ 156.00</li>
                <li className='color-black'>£ 156.00</li>
            </ul>
              <ul className='flex ulgap text4 m39'>
                  <li className='color-black'>Banner Design</li>
                  <li className='color-Darkgrey'>1</li>
                  <li className='color-Darkgrey'>£ 156.00</li>
                  <li className='color-black'>£ 156.00</li>
              </ul>
        </div>
    </div>   
       
    <div className='table-total-price'>
      <span className='text5'>Amount Due</span>
      <span className='text2'>£ 556.00</span>
    </div>
      
    
      
    </> 
  )
}
