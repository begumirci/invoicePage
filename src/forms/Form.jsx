import React from 'react'
import drop from './dropArrow.svg'
import '../index.css'
import './form.css';
import { useState } from 'react';

export default function Form() {
  const [isOpen, setIsOpen] = useState(false);
  
  function show(){
    if(isOpen == false){
      setIsOpen(true);
    }else{
      setIsOpen(false);
    }
  }

  return (
    <div>
      <form className='form'>
        <div className='form-group'>
            <span className='form-color text6'>Street Address</span>
            <input type="text" className='input-color text4' />
        </div>
        <div className='form-group'>
            <span className='form-color text6'>Payment Terms</span>
            <div className='dropdown-container'>
                <div className='dropdown-header input-color text4' onClick={show}>
                    <span>Seçiniz</span>
                    <img src={drop} alt="" />
                </div>
            {isOpen ? <><div className='dropdown-content text4'>
              <div>Net 1 Day</div>
              <div>Net 7 Days</div>
              <div>Net 14 Days</div>
              <div>Net 30 Days</div>
            </div></> : ''}
            </div>
        </div>
        <div className='form-group'>
            <span className='form-color text6'>Street Address</span>
            <input type="date" className='input-color text4' />
        </div>
      
      </form>
    </div>
  )
}
