
import { Button } from 'flowbite-react';
import { FaGoogle } from 'react-icons/fa6';

export default function Oauth() {

    const handleGoogleClick = async () => {

    }

    
  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick} >
        <FaGoogle className='w-5 h-5 mr-2'/>
        Continue with Google
    </Button>
  )
}
