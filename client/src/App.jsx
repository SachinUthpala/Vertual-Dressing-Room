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
import AllUsers from './Pages/AllUsers';
import DressingRoom from './Pages/DressingRoom';
import DressUpdate from './Pages/DressUpdate';



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
        <Route element={<PrivateRout/>}>
          <Route path='/tryDress' element={<DressingRoom/>} />
        </Route>
        <Route element={<OnlyAdminPrivateRout/>}>
          <Route path='/create-dress' element={<CreateDress/>} />
        </Route>
        <Route element={<OnlyAdminPrivateRout/>}>
          <Route path='/all-dress' element={<AllDress/>} />
        </Route>
        <Route element={<OnlyAdminPrivateRout/>}>
          <Route path='/all-users' element={<AllUsers/>} />
        </Route>
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/updateDress/:id' element={<DressUpdate/>} />
      </Routes>
      <Footers/>
    </BrowserRouter>
  )
}
