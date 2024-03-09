import React from 'react'
import './header.css'
import arrow from './header-img/arrow.svg'
import plus from './header-img/plus.svg'
import Tables from '../tables/Tables'



export default function Header() {
    return (
       
        <div className='header-top'>
            <div className='header-left'>
                <h1 className='text1 color-black'>Invoices</h1>
                <span className='text6 color-grey'>There are 7 total invoices</span>
            </div>

            <div className='header-right'>
                <div className='filter-flex text4 color-black'>
                    <h4>Filter by status</h4>
                    <img src={arrow} alt=""  />
                </div>
                <button className='button1 text4'>
                    <div>
                        <img src={plus} alt="" />
                        <span>New Invoice</span>
                    </div>
                </button>
            </div>
        </div>
       

    )
}
