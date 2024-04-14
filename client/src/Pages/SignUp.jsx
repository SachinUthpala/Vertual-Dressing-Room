
import { Link } from 'react-router-dom';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 mx-auto max-w-3xl flex-col sm:flex-row items-center gap-5">

        {/* left  */}
        <div className="flex-1">
          <Link to={'/'} className=' font-bold dark:text-white text-4xl'>
            <span className='px-2 mr-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white rounded-lg'>
              FITTON
            </span>
            YOU
          </Link>
          <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, hic?</p>
          <img src="public/cSignImg.png"width={200} height={200} alt="" />
        </div>

        {/* right side */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div className="">
              <Label value='Your Username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
              />
            </div>
            <div className="">
              <Label value='Your Email' />
              <TextInput
                type='email'
                placeholder='Email'
                id='email'
              />
            </div>
            <div className="">
              <Label value='Your Password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToBlue' outline type='submit'>Sign Up</Button>
          </form>
          <div className="flex gap-2 mt-3 text-sm font-semibold">
            <span>Have An Account : </span>
            <Link to={'../signin'} className='text-blue-500' >
              Sign In
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
