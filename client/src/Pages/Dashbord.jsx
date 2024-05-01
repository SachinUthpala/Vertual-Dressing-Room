import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSideBar from '../Components/DashSideBar';
import DashProfile from '../Components/DashProfile';


export default function Dashbord() {
  const location = useLocation();
  const [tab , setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    console.log(tabFromUrl);

    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  } , [location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* side bar */}
      <div className="md:w-56">
        <DashSideBar/>
      </div>
      {/* dashbord content */}
        {
          tab === 'profile' && <DashProfile/>
        }
      
    </div>
  )
}
