
import { Button, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
export default function DashProfile() {

    const {currentUser} = useSelector((state) => state.user)
    const [imageFile , setImageFile] = useState(null);

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    }

    console.log(imageFile);
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
        <form className='flex flex-col gap-4'>
            <input type="file" accept='image/*' onChange={handleImageChange} />
            <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
                <img src={currentUser.profilePicture} alt="" 
                className='rounded-full w-full h-full object-cover border-8 border-gray-500' />
            </div>
            <TextInput type='text' placeholder='username' defaultValue={currentUser.username} />
            <TextInput type='text' placeholder='email' defaultValue={currentUser.email} />
            <TextInput type='password' placeholder='password'  />

            <Button type='submit' gradientDuoTone='purpleToBlue' outline>Update</Button>
        </form>
        <div className='text-red-500 flex justify-between mt-5'>
        <span className='cursor-pointer'>
          Delete Account
        </span>
        <span className='cursor-pointer'>
          Sign Out
        </span>
      </div>
    </div>
  )
}
