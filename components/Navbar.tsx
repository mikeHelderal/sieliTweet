import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>   
        <nav>
            <ul>           
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>accueil</NavLink>
            </ul>
            <ul>
                <NavLink to="/inscription" className={({ isActive }) => isActive ? 'active' : undefined}>inscription</NavLink>
            </ul>
            <ul>
                <NavLink to="/connexion" className={({ isActive }) => isActive ? 'active' : undefined}>connexion</NavLink>
            </ul>     
        </nav>
        <main>
        <Outlet/>
        </main>
    </div>
  )
}

export default Navbar