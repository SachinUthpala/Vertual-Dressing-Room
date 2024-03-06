import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
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
          <form className="flex-col flex gap-4 mb-4">
            <div>
              <Label value="Your Username "/>
              <TextInput type="text" placeholder="Username" id="userName" />
            </div>

            <div>
              <Label value="Your Email "/>
              <TextInput type="email" placeholder="Email" id="userMail" />
            </div>

            <div>
              <Label value="Your Password "/>
              <TextInput type="password" placeholder="Password" id="userPassword" />
            </div>

            <div>
              <TextInput type="hidden" placeholder="Username" id="userType" value={'false'}/>
            </div>

            <Button gradientDuoTone="purpleToBlue" type="subit">Sign Up</Button>
          </form>
          <div className="flex gap-2 flex-row">
            <span>Have an Account ? </span>
            <Link to={'/sign-in'} className="text-blue-600"> Sign In </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
