import { NavLink } from 'react-router-dom'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const NavComponent = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="navbar bg-base-100" data-aos="fade-down">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink>Alexa</NavLink></li>
            <li>
              <NavLink>Parent</NavLink>
              <ul className="p-2">
                <li><NavLink>Submenu 1</NavLink></li>
                <li><NavLink>Submenu 2</NavLink></li>
              </ul>
            </li>
            <li><NavLink>Item 3</NavLink></li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">daisyUI</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/alexa">Alexa</NavLink></li>
          <li>
            <details>
              <summary>Categorias</summary>
              <ul className="p-2">
                <li><NavLink>Roupas</NavLink></li>
                <li><NavLink>Melhores ofertas</NavLink></li>
              </ul>
            </details>
          </li>
          <li><NavLink>Item 3</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink className="btn">Button</NavLink>
      </div>
    </div>


  )
}

export default NavComponent