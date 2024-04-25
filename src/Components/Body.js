import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
        element:<Login/>,
        path:"/"
    },
    {
        element:<Browse/>,
        path:"/browse"
    }
  ])
  return (
    <>
        <Header/>
        <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body