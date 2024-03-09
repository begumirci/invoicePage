import React from 'react'
import Table from '../tables/Table'
import './viewinvoice.css'
import back from './back.svg'
import '../tables/table.css'
import orange from '../tables/table-img/orange.svg'
import Viewinvoicecontent from './viewinvoicecontent'

export default function Viewinvoice() {
  return (
    <div className='container'>
        <div className='view-back'>
            <img src={back} alt="" />
            <span className='text4 color-black'>Go Back</span>
        </div>
        <Table>
              <div className='table-left'>
                  <span className='text6 color-grey'>Status</span>
                  <div className='btn-paid orange'>
                      <div className='paid'>
                          <img src={orange} alt="" />
                          <span className='text4'>Pending</span>
                      </div>
                  </div>
              </div>
              <div className='table-right'>
                  <button className='button2 text4 btn-property'>Edit</button>
                  <button className='button3 text4 btn-property'>Delete</button>
                  <button className='button4 text4 btn-property'> Mark as Paid</button>
              </div>
        </Table>
        <Viewinvoicecontent />
    </div>
  )
}
