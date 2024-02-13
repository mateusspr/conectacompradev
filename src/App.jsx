
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavComponent from "./components/NavComponent"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Alexa from "./pages/Alexa"
import LeftHanded from "./pages/LeftHanded"

function App() {

  return (
    <>
      <main className="flex flex-col">
        <BrowserRouter>
        <NavComponent/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/alexa" element={<Alexa/>}/>
          <Route path="/left-handed" element={<LeftHanded/>}/>
        </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
