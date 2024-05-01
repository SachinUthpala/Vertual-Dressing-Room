import { Sidebar, Label } from 'flowbite-react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  HiUser,
  HiArrowSmLeft,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

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
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
