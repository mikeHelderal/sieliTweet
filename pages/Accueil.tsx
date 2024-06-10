import "../src/App.css"
import {NavLink,Outlet} from 'react-router-dom'



const Accueil = () => {

  return (
    
    <div>
    <header className='header'>
    <nav className='nav'>
        <ul>
            
 <NavLink 
    to="/" 
    className={({ isActive }) => isActive ? 'active' : undefined}
  >accueil</NavLink>
        </ul>    
   

    </nav>
    </header>
    <section>
        <Outlet/>
        
    </section>
    <footer className='footer'>
      <h1></h1>
    </footer>
    </div>

  )
}

export default Accueil