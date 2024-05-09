import {Outlet , Navigate} from 'react-router-dom'
import { useSelector} from 'react-redux';

export default function OnlyAdminPrivateRout() {
    const {currentUser} = useSelector((state) => state.user);
  return currentUser && currentUser.isAdmin ? <Outlet/> : <Navigate to='/signin'/>
}
