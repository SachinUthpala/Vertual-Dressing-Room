import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart , signInSucess , signInFauiler } from "../redux/Users/UserSlice";
import { useDispatch, useSelector } from "react-redux";


export default function SignIn() {

  const [formData , setFormData] = useState({})
  
  const {loading , error : errorMsg} = useSelector(state => state.user)
 

  const dispatch = useDispatch();
  

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData , [e.target.id]: e.target.value.trim()})
  }

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.userMail || !formData.userPassword ){
      return dispatch(signInFauiler('Fill All Feilds'));
    }

    try {
      // setLoading(true);
      // setErrorMsg(null);
      dispatch(signInStart())

      const res = await fetch('/api/auth/signin' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if(data.success === false){
        // setErrorMsg(data.message);
        dispatch(signInFauiler(data.message))
      }

      

      if(res.ok){
        dispatch(signInSucess(data))
      navigate('/');
}
      
      console.log(data);

    } catch (error) {
      console.log(error);
      dispatch(error.message)
      // setErrorMsg('Something went wrong');
      // setLoading(false);
    }
  }




  return (
    <div className="max-h-screen mt-20">
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
        {/* right  */}
        <div className="flex-1">
          {
            errorMsg && (
              <Alert className="mt-5 mb-5" color='failure'>
                {errorMsg}
              </Alert>
            )
          }
          <form className="flex-col flex gap-4 mb-4" onSubmit={handleSubmit}>

            <div>
              <Label value="Your Email "/>
              <TextInput type="email" placeholder="Email" id="userMail" onChange={handleChange}/>
            </div>

            <div>
              <Label value="Your Password "/>
              <TextInput type="password" placeholder="Password" id="userPassword" onChange={handleChange}/>
            </div>

            <div>
              <TextInput type="hidden" placeholder="Username" id="userType" value={'false'} onChange={handleChange}/>
            </div>

            <Button gradientDuoTone="purpleToBlue" type="subit" disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className="pl-2">Loading</span>
                  </>
                ) :  'Sign In'
              }
            </Button>
          </form>
          <div className="flex gap-2 flex-rowonChan">
            <span>Dont have an Account ? </span>
            <Link to={'/sign-up'} className="text-blue-600"> Sign In </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
