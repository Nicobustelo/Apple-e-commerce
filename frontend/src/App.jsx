import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Iphone from './pages/Iphone'
import Footer from './components/Footer'
import Mac from './pages/Mac'
import Accesorios from './pages/Accesorios'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/iPhone" element={<Iphone />}>
        </Route>
        <Route path="/mac" element={<Mac />}>
        </Route>
        <Route path="/accesorios" element={<Accesorios />}>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
