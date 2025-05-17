import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import PageNotFound from './screens/PageNotFound'
import Service from './screens/Service'
import EventPage from './screens/EventPage'
import Contact from './screens/Contact'

const App = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home collapsed={collapsed} setCollapsed={setCollapsed}/>} />
        <Route path="/about" element={<About collapsed={collapsed} setCollapsed={setCollapsed}/>} />
        <Route path='/service' element={<Service/>}/>
        <Route path='/events' element={<EventPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App