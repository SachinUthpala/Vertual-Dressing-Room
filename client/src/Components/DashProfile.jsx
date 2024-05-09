import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { app } from './../firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Button, TextInput, Alert, Modal } from 'flowbite-react';
import { updateStart, updateSuccess, updateFailure, deleteUserStart, deleteUserFailure, signoutSuccess } from '../redux/user/userSlice';

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imgFileUrl, setImgFileUrl] = useState(null);
  const [imageFileUploadingProgress, setImageFileUploadingProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [showModel, setShowModel] = useState(false);

  const filePickerRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImgFileUrl(URL.createObjectURL(file));
    }
    setImageFile(e.target.files[0]);
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    console.log("uploading Image ...");
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadingProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError("Could not upload");
        setImageFileUploadingProgress(null);
        setImageFile(null);
        setImgFileUrl(null);
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgFileUrl(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0) {
      return;
    }

    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        dispatch(updateFailure(data.message));
      } else {
        dispatch(updateSuccess(data));
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      console.log(error);
    }
  };

  const handleUserDelete = async () => {
    setShowModel(false);

    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(deleteUserStart(data.message));
        dispatch(signoutSuccess());
      } else {
        dispatch(deleteUserFailure(data));
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await fetch('/api/user/signOut', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="file" accept='image/*' onChange={handleImageChange} id="profilePicture" ref={filePickerRef} hidden />
        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full" onClick={() => filePickerRef.current.click()}>
          {imageFileUploadingProgress && (
            <CircularProgressbar value={imageFileUploadingProgress || 0} text={`${imageFileUploadingProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }, path: {
                  stroke: `rgba(62,152,199,${imageFileUploadingProgress / 100})`,
                }
              }}
            />
          )}
          <img src={imgFileUrl || currentUser.profilePicture} alt=""
            className='rounded-full w-full h-full object-cover border-8 border-gray-500' />
        </div>
        {imageFileUploadError && <Alert color='failure'>{imageFileUploadError}</Alert>}
        <TextInput type='text' placeholder='Username' defaultValue={currentUser.username} id="username" onChange={handleChange} />
        <TextInput type='text' placeholder='Email' defaultValue={currentUser.email} id="email" onChange={handleChange} />
        <TextInput type='password' placeholder='Password' id="password" onChange={handleChange} />
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>Update</Button>
      </form>
      
      <div className='text-red-500 flex justify-between mt-5'>
        <span onClick={() => setShowModel(true)} className='cursor-pointer'>
          Delete Account
        </span>
        <span onClick={handleSignOut} className='cursor-pointer'>
          Sign Out
        </span>
      </div>
      {/* Show model */}
      <Modal show={showModel} onClose={() => setShowModel(false)} popup size='md'>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete your account?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleUserDelete}>
                Yes, Im sure
              </Button>
              <Button color='gray' onClick={() => setShowModel(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
