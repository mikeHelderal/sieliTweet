import '../src/App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Inscription from '../pages/Inscription'
import Accueil from '../pages/Accueil'


function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Accueil/>} />        
          <Route path="/inscription" element={<Inscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
