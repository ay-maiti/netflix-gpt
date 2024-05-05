import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Header'
import { Provider } from 'react-redux'
import appStore from '../Utils/appStore'

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
      <Provider store={appStore}>
          <Header/>
          <RouterProvider router={appRouter}/>
      </Provider>
    </>
  )
}

export default Body