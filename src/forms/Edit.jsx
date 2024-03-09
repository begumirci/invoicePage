import React from 'react'
import Header from '../header/Header'
import './form.css'
import { useState } from 'react';
import drop from './dropArrow.svg'
import cop from './cop.svg'

export default function Edit() {
    const [isOpen, setIsOpen] = useState(false);

    function show() {
        if (isOpen == false) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }
    return (
        <div className='form-container'>
            <span className='text7 color-black'>Edit <span className='color-grey'>#</span>XM9141</span>
            <form className='form'>
                <div className='bill-from'>
                    <h3 className='text4 color-purple'>Bill From</h3>
                    <div className='form-group'>
                        <span className='form-color text6'>Street Address</span>
                        <input type="text" className='input-color text4' />
                    </div>
                    <div className='flex flex-gap'>
                        <div className='form-group'>
                            <span className='form-color text6'>City</span>
                            <input type="text" className='input-color text4' />
                        </div>
                        <div className='form-group'>
                            <span className='form-color text6'>Post Code</span>
                            <input type="text" className='input-color text4' />
                        </div>
                        <div className='form-group'>
                            <span className='form-color text6'>Country</span>
                            <input type="text" className='input-color text4' />
                        </div>
                    </div>
                </div>
                <div className='bill-from'>
                    <h3 className='text4 color-purple'>Bill To</h3>
                    <div className='form-group'>
                        <span className='form-color text6'>Client’s Name</span>
                        <input type="text" className='input-color text4' />
                    </div>
                    <div className='form-group'>
                        <span className='form-color text6'>Client’s Email</span>
                        <input type="text" className='input-color text4' />
                    </div>
                    <div className='form-group'>
                        <span className='form-color text6'>Street Address</span>
                        <input type="text" className='input-color text4' />
                    </div>
                    <div className='flex flex-gap'>
                        <div className='form-group'>
                            <span className='form-color text6'>City</span>
                            <input type="text" className='input-color text4' />
                        </div>
                        <div className='form-group'>
                            <span className='form-color text6'>Post Code</span>
                            <input type="text" className='input-color text4' />
                        </div>
                        <div className='form-group'>
                            <span className='form-color text6'>Country</span>
                            <input type="text" className='input-color text4' />
                        </div>
                    </div>
                    <div className='flex flex-gap'>
                        <div className='form-group'>
                            <span className='form-color text6'>Invoice Date</span>
                            <input type="date" className='input-color text4' />
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
                    </div>
                    <div className='form-group'>
                        <span className='form-color text6'>Project Description</span>
                        <input type="text" className='input-color text4' />
                    </div>
                </div>
                <div className='cart'>
                        <h3 className='text8 color-lightgrey'>Item List</h3>
                     <div className='cart-flex'>
                        <div className='flex-column' style={{width:216}}>
                            <div className='text5 color-Darkgrey'>İtem Name</div>
                            <div className='color-black border'>Banner Design</div>
                            <div className='color-black border'>Email Design</div>
                        </div>
                        <div className='flex-column' style={{width:46}}>
                            <div className='text5 color-Darkgrey'>QTY.</div>
                            <div className='color-Darkgrey border'>1</div>
                            <div className='color-Darkgrey border'>2</div>
                        </div>
                        <div className='flex-column' style={{width:100}}>
                            <div className='text5 color-Darkgrey'>Price</div>
                            <div className='color-Darkgrey border'>£ 156.00</div>
                            <div className='color-Darkgrey border'>£ 156.00</div>
                        </div>
                        <div className='flex-column white-space'>
                            <div className='text5 color-Darkgrey'>Total</div>
                            <div className='color-black border-nocolor'>£ 156.00</div>
                            <div className='color-black border-nocolor'>£ 400.00</div>
                        </div>
                        <div className='flex-column'>
                            <div></div>
                            <div><img src={cop} className='trash border-nocolor' alt="" /></div>
                            <div><img src={cop} className='trash border-nocolor' alt="" /></div>
                        </div>
                    </div> 
                    <button  className='button6 text4 btn-property m0'>+ Add New Item</button>
                </div>
                <div className='btns'>
                    <button className='button2 text4 btn-property'>Cancel</button>
                    <button className='button4 text4 btn-property'>Save Changes</button>
                </div>


            </form>

        </div>
    )
}
