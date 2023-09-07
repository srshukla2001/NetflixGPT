import React from 'react'
import Header from './Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

const Body = () => {

    const appRoute = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        },

    ])
  return (
    <div>
        <Header/>
<RouterProvider router={appRoute}/>

    </div>
  )
}

export default Body