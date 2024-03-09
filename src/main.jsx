import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Emtypgae from './emtyPage/Emtypgae.jsx'
import Tables from './tables/Tables.jsx'
import Viewinvoice from './viewinvoice/Viewinvoice.jsx'
import Edit from './forms/Edit.jsx'
import Form from './forms/Form.jsx'
import Warning from './warning/Warning.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        index:true,
        element:<Tables />
      },
      {
        path:'/emty',
        element:<Emtypgae />
      },
      {
        path:'/view',
        element:<Viewinvoice />
      },
      {
        path:'/edit',
        element:<Edit />
      },
      {
        path:'/warn',
        element:<Warning />
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
