import './App.css'
import About from './components/pages/About';
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from './components/pages/Pricing';
import Login from './components/pages/Login';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='pricing' element={<Pricing/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*'>PageNotFound</Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
