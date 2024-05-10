import { Sidebar } from 'flowbite-react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  HiUser,
  HiArrowSmLeft,
  // HiDocumentText,
  // HiOutlineUserGroup,
  // HiAnnotation,
  // HiChartPie,
} from 'react-icons/hi';
import { GiAmpleDress } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FaUsers } from "react-icons/fa6";

export default function DashSideBar() {

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


  const { currentUser } = useSelector((state) => state.user);

  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashbord?tab=profile'>
            <Sidebar.Item active={tab === 'profile'} icon={HiUser} label='User Profile' labelColor='dark' as="div">
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item  icon={HiArrowSmLeft} label='Sign Out' labelColor='red' className = "cursor-pointer">
            Sign Out
          </Sidebar.Item>
          {currentUser.isAdmin && (
        <Link to={'/create-dress'}>
         <Sidebar.Item active={tab === 'profile'} icon={GiAmpleDress} label='Add' labelColor='dark' as="div">
              Add Dress
            </Sidebar.Item>
        </Link>
      )}

    {currentUser.isAdmin && (
        <Link to={'/all-dress'}>
         <Sidebar.Item active={tab === 'profile'} icon={GiAmpleDress} label='All Dress' className="mt-2" labelColor='dark' as="div">
              All Dress
            </Sidebar.Item>
        </Link>
      )}

{currentUser.isAdmin && (
        <Link to={'/all-users'}>
         <Sidebar.Item active={tab === 'profile'} icon={FaUsers} label='All Users' className="mt-2" labelColor='dark' as="div">
              All Users
            </Sidebar.Item>
        </Link>
      )}


        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
