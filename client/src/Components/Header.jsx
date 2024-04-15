
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { useSelector } from 'react-redux';


export default function Header() {
    // gettig current path
    const path = useLocation().pathname;
    const {currentUser} = useSelector(state => state.user);
  return (
    <Navbar
    className='border-b-2 items-center'>
        {/* Fitton logo */}
       <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg text-white mx-1'>Fiton</span>
            Now
        </Link> 
        {/* search bar */}
        <form>
            <TextInput 
            type='text'
            placeholder='Search .. '
            rightIcon={IoSearchOutline}
            className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <IoSearchOutline/>
        </Button>
        {/* div for moon and sign up */}
        <div className='flex gap-2 items-center md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color={'gray'} pill>
                <IoMdMoon/>
            </Button>
            {
                currentUser ? (
                 <Dropdown
                 arrowIcon = {false}
                 inline
                 label={<Avatar alt='user' img={currentUser.profilePicture} rounded />}
                 >
                    <Dropdown.Header>
                        <span className='block text-sm'>@{currentUser.username}</span>
                        <span className='block text-sm'>{currentUser.email}</span>
                    </Dropdown.Header>
                    <Link to={'dashbord?tab=profile'}>
                        <Dropdown.Item>
                            Profile Settings
                        </Dropdown.Item>
                    </Link>
                    <Dropdown.Divider/>
                    <Dropdown.Item>
                        <span className='text-red-600 font-bold'>Sign Out</span>
                    </Dropdown.Item>
                 </Dropdown>   
                ) : (
                    <Link to={'/signin'}>
                        <Button gradientDuoTone='purpleToBlue' outline>
                            Sign In
                        </Button>
                    </Link>
                )
            }
            <Navbar.Toggle />
        </div>
        {/* Nav Bar */}
        <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>
                <Link to={'/'}>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/aboutus'} as={'div'}>
                <Link to={'/aboutus'}>
                    About Us
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === 'contactus'} as={'div'}>
                <Link to={'/aboutus'}>
                    Contact Us
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
