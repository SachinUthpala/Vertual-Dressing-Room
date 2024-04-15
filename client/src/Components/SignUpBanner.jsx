import { Avatar, Banner } from 'flowbite-react';
import { useSelector } from 'react-redux';

export default function SignUpBanner() {

    const {currentUser} = useSelector(state => state.user);
    
  return (
    <div className='flex justify-center'>
        <Banner>
        <div className="flex w-[calc(100%-2rem)] flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl ">
            <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
            <a
                href="https://flowbite.com/"
                className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4"
            >
                <span className='px-2 mr-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white rounded-lg'>
                    FITTON
                </span>
                <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white md:pr-6">
                YOU
                </span>
            </a>
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
               {
                currentUser ? (
                    <> <h2 className='font-semibold'>Welcome {currentUser.username} & {currentUser.email}</h2></>
                ) : (
                    <>
                        <span> Sign Up for Free and Get more benifits from our website and have a good shopping expericence</span>
                    </>
                )
               }
            </p>
            </div>
            <div className="flex flex-shrink-0 items-center">
                {
                    currentUser ? (
                        <>
                        <Avatar img={currentUser.profilePicture} rounded />
                        </>
                    ):(
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Sign In
                            </span>
                        </button>
                    )
                }
                
            </div>
        </div>
    </Banner>
    </div>
  )
}
