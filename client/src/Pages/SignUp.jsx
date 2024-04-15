
import { Link } from 'react-router-dom';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import { Alert } from 'flowbite-react';
import { Spinner , } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import Oauth from '../Components/Oauth';

export default function SignUp() {
  //navigation
  const navigate = useNavigate();
  //data handling
  const [formData , setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({...formData , [e.target.id] : e.target.value});
    
  }
  console.log(formData);
  //submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();//to dont refresh the page
    if(!formData.username || !formData.password || !formData.email){
      return setErrorMsg('Fill all the feilds');
    }
    try{
      setErrorMsg(null);
      setloading(true);
      const res = await fetch('/api/auth/signup' , {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(formData),
      });

      const data = await res.json();
      if(data.success === false){
        setloading(false)
        return setErrorMsg(data.message);
      }
      setloading(false);
      if(res.ok){
        navigate('/signin')
      }
    }catch (error){
      console.log(error);
      setloading(false);
    }
  }
  //error handling
  const [errorMsg , setErrorMsg] = useState(null);
  const [loading , setloading] = useState(false);
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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className="">
              <Label value='Your Username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value='Your Email' />
              <TextInput
                type='email'
                placeholder='Email'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value='Your Password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToBlue' outline type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm' />
                  <span className='pl-2'>Loading</span>
                  </>
                ) : 'Sign Up'
              }
            </Button>
            <Oauth/>
          </form>
          <div className="flex gap-2 mt-3 text-sm font-semibold">
            <span>Have An Account : </span>
            <Link to={'../signin'} className='text-blue-500' >
              Sign In
            </Link>
          </div>
          {
            errorMsg && (
              <Alert className='mt-5' color='failure'>
                {errorMsg}
              </Alert>
            )
          }
        </div>

      </div>
    </div>
  )
}
