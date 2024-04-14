import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Dashbord from './Pages/Dashbord';
import Header from './Components/Header';
import AboutUs from './Pages/About';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/dashbord' element={<Dashbord/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  )
}
