
import { Button, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { app } from './../firebase';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
export default function DashProfile() {

    const {currentUser} = useSelector((state) => state.user)
    const [imageFile , setImageFile] = useState(null);
    const [imgFileUrl , setImgFileUrl] = useState(null);
    const [imageFileUploadingProgress , setImageFileUploadingProgress] = useState(null);
    const [imageFileUploadError , setImageFileUploadError] = useState(null);

    console.log(imageFileUploadingProgress , imageFileUploadError);

    const filePickerRef = useRef();

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if(file){
        setImageFile(file);
        setImgFileUrl(URL.createObjectURL(file));
      }
        setImageFile(e.target.files[0]);

    }

    // console.log(imageFile , imgFileUrl);
    useEffect(() => {
      if(imageFile){
        uploadImage();
      }
    } , [imageFile]);

    const uploadImage = async () => {
      

      // rules_version = '2';

      // Craft rules based on data in your Firestore database
      // allow write: if firestore.get(
      //    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
        // service firebase.storage {
        //   match /b/{bucket}/o {
        //     match /{allPaths=**} {
        //       allow read;
        //       allow write : if
        //       request.resource.size < 2 * 1024  * 1024 &&
        //       request.resource.contentType.matches('image/.*'')
        //     }
        //   }
        // }
      console.log("uploding Image ...");
      const stroage = getStorage(app);
      const fileName = new Date().getTime() + imageFile.name;
      const StroageRef = ref(stroage , fileName);
      const uploadTask = uploadBytesResumable(StroageRef , imageFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = 
           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           setImageFileUploadingProgress(progress.toFixed(0))
        },
        (error) => {
          setImageFileUploadError("could Not Upload");
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgFileUrl(downloadURL);
          })
        }
      )

      
    }

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
        <form className='flex flex-col gap-4'>
            <input type="file" accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden />
            <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full" onClick={() => {
              filePickerRef.current.click()
            }}>
                <img src={imgFileUrl || currentUser.profilePicture} alt="" 
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
          Sign  Out
        </span>
      </div>
    </div>
  )
}
