import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layouts/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signup'
import Footer from './components/Layouts/footer'
import Dashboard from './pages/user/dashboard'




function App() {

  return ( 
    <> 
      <BrowserRouter>
        
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/service' element={ <Service /> } />
            <Route path='/membership' element={ <Membership /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <SignUp /> } />
            <Route path='/dashboard' element={ <Dashboard /> } />
          </Routes>
          <Footer />
        
      </BrowserRouter>            
    </>
  )
}

export default App
