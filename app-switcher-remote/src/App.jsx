import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SideNav from './components/SideNav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <SideNav/>
    <Routes>
      <Route path="/" element={ <></> } />
      <Route path="/" element={<></>} />
    </Routes>
  </Router>
  )
}

export default App
