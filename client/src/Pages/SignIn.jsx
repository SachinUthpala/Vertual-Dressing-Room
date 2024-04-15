
import { Link } from 'react-router-dom';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import { Alert } from 'flowbite-react';
import { Spinner , } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import {signInStart , signInSuccess , signInFailure } from '../redux/user/userSlice'
import Oauth from '../Components/Oauth';



export default function SignIn() {
  //create dispatch
  const dispatch = useDispatch();
  //use selector
  const { loading , error : errorMsg} = useSelector(state => state.user);


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
    if( !formData.password || !formData.email){
      return dispatch(signInFailure('Fill All Feuilds'));
    }
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin' , {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(formData),
      });

      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message));
      }
      
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/')
      }
    }catch (error){
      dispatch(signInFailure(error.message));
    }
  }
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
                ) : 'Sign In'
              }
            </Button>
            <Oauth/>
          </form>
          <div className="flex gap-2 mt-3 text-sm font-semibold">
            <span>Dont tHave An Account : </span>
            <Link to={'../signup'} className='text-blue-500' >
              Sign Up
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
