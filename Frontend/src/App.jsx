import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layouts/navbar'
import Home from './pages/Home'
import About from './pages/guest/About'
import Schedule from './pages/guest/Schedule'
import Membership from './pages/guest/Membership'
import Contact from './pages/guest/Contact'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signup'
import Footer from './components/Layouts/footer'
import Dashboard from './pages/user/dashboard'
import Blog from './pages/user/Blog'
import FAQ from './pages/guest/FAQ'
import Profile from './pages/user/profile'




function App() {

  return ( 
    <> 
      <BrowserRouter>
        
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/schedule' element={ <Schedule /> } />
            <Route path='/membership' element={ <Membership /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <SignUp /> } />
            <Route path='/dashboard' element={ <Dashboard /> } />
            <Route path='/blog' element={ <Blog /> } />
            <Route path='/faq' element={ <FAQ /> } />
            <Route path='/profile' element={ <Profile /> } />
          </Routes>
          <Footer />
        
      </BrowserRouter>            
    </>
  )
}

export default App
