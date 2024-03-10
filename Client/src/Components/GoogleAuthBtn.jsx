import { Button } from "flowbite-react";
import { FaGoogle } from "react-icons/fa6";
import {GoogleAuthProvider, signInWithPopup , getAuth} from 'firebase/auth'
import { app } from "../Firebase";
import { useDispatch } from "react-redux";
import { signInSucess } from "../redux/Users/UserSlice";
import { useNavigate } from "react-router-dom";


export default function GoogleAuthBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {


        const auth = getAuth(app)

        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt : 'select_account'
        });

        try {
            const resultFromGoogle = await signInWithPopup(auth , provider)
            // console.log(resultFromGoogle);

            const res = await fetch('api/auth/google',
                {method : 'POST',
                headers :{'Content-type' : 'application/json'},
                body : JSON.stringify({
                    userName : resultFromGoogle.user.displayName,
                    userMail : resultFromGoogle.user.email,
                    googlePhotoUrl : resultFromGoogle.user.userPhotoURL
                })
            });

            const data = await res.JSON()

            if(res.ok){
                dispatch(signInSucess(data));
                navigate('/')
            }

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Button type="button" gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
        <FaGoogle className="w-5 h-5" />
        <span className="ml-3">Continive With Google</span>
    </Button>
  )
}
