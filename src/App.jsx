import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Item1 from './components/items/Item1'
import Item2 from './components/items/Item2'
import Item3 from './components/items/Item3'
import Item4 from './components/items/Item4'
import Item5 from './components/items/Item5'
import Item6 from './components/items/Item6'
import { router } from './components/myRoutes/MyRoutes'




const App = () => {
  return (

    //! NEW ROUTING VERSION
    <RouterProvider router={router} ></RouterProvider>

    
    //! OLD ROUTING VERSION
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<LandingPage />}></Route>
    //     <Route path='/home' element={<Home />}></Route>
    //   </Routes>
    // </BrowserRouter>

  )
}

export default App