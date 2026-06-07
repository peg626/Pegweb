import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Down from "./pages/Down"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/downloads" element={<Down />}/>
    </Routes>
  )

}

export default App
