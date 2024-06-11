import '../src/App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Inscription from '../pages/Inscription'
import Accueil from '../pages/Accueil'
import Connexion from '../pages/Connexion'
import Follow from '../pages/Follow'


function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Accueil/>} />        
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/follow" element={<Follow />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
