import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../../pages/routes'
import logo from '../../assets/img/inheart.png'
import { useDispatch } from 'react-redux'
import { search } from '../../crud/actions/search'

export const Navbar = () => {
   const { pathname } = useLocation()
   const dispatch = useDispatch()
   const handleSearch = ({ target }) => dispatch(search(target.value))

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <a style={{ marginLeft: 20 }} href="#">
            <img src={logo} alt="" width="50" height="50" />
         </a>
         <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
               <ul className="navbar-nav">
                  {routes.map(path => (
                     <li key={path} className="nav-item">
                        <Link className={`nav-link ${pathname === path && 'nav-active'}`} to={path}>
                           {path.toUpperCase().slice(1)}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
            <form className="d-flex">
               <input
                  style={{ cursor: 'pointer' }}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleSearch}
               />
            </form>
         </div>
      </nav>
   )
}
