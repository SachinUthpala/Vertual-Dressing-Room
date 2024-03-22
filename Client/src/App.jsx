import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Dashbord from './Pages/Dashbord';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Header from './Components/Header';
import Footerss from './Components/Footerss'
import DressingRoom from './Components/DressingRoom';


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/dashbord' element={<Dashbord/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/dressingRoom' element={<DressingRoom/>} />
        </Routes>
        <Footerss/>      
      </BrowserRouter>
    </div>
  )
}
