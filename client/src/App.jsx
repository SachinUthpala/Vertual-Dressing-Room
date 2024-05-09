import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Dashbord from './Pages/Dashbord';
import Header from './Components/Header';
import AboutUs from './Pages/About';
import Footers from './Components/Footers';
import PrivateRout from './Components/PrivateRout';
import OnlyAdminPrivateRout from './Components/OnlyAdminPrivateRout';
import CreateDress from './Pages/CreateDress';
import AllDress from './Pages/AllDress';


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>} />
        <Route element={<PrivateRout/>}>
          <Route path='/dashbord' element={<Dashbord/>} />
        </Route>
        <Route element={<OnlyAdminPrivateRout/>}>
          <Route path='/create-dress' element={<CreateDress/>} />
        </Route>
        <Route element={<OnlyAdminPrivateRout/>}>
          <Route path='/all-dress' element={<AllDress/>} />
        </Route>
        <Route path='/aboutus' element={<AboutUs/>} />
      </Routes>
      <Footers/>
    </BrowserRouter>
  )
}
