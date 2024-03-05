import {Button, Navbar, TextInput} from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { LuSearchCheck } from "react-icons/lu";
import { BsMoonStars } from "react-icons/bs";

export default function Header() {

  const path = useLocation().pathname;

  return (
    <div className='sticky top-0 z-10'>
      <Navbar className="border-b-2 mb-3 bg-gray-100/95">

        <Link to={'/'} className='self-center whitespace-nowrap text-sm sm:text-2xl font-semibold dark:text-white'>
          <span className='px-2 mr-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white rounded-lg'>
            FITTON
          </span>
          YOU
        </Link>

        <form>
          <TextInput
            type='text'
            placeholder='Search ..'
            rightIcon = {LuSearchCheck}
            className='hidden lg:inline'
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <LuSearchCheck/>
        </Button>

        <div className='flex gap-2 md:order-2 '>
          <Button className='w-12 h-11 hidden sm:inline' color='gray' pill>
            <BsMoonStars/>
          </Button>
          <Link to={'sign-in'}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Sign In
              </span>
            </button>
          </Link>
          <Navbar.Toggle/>
        </div>

        <Navbar.Collapse>
            <Navbar.Link active={path === '/'}  as={'div'}>
              <Link to='/'>
                Home
              </Link>
            </Navbar.Link>

            <Navbar.Link active={path === '/about-us'} as={'div'}>
              <Link to='/about-us'>
                About Us
              </Link>
            </Navbar.Link>

            <Navbar.Link active={path === '/contact-us'} as={'div'}>
              <Link to='/contact-us'>
                Contact Us
              </Link>
            </Navbar.Link>

            <Navbar.Link active = { path === '/f&q'} as={'div'}>
              <Link to='/f&q'>
                F & Q
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>


      </Navbar>
    </div>
  )
}
