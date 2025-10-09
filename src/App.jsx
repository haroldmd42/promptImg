
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/NavBar'
import Landing from './components/landing/Landing'
import Collections from './components/Collections'



function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/collections' element={<Collections />} />
      </Routes>
    </Router>

  )
}

export default App
