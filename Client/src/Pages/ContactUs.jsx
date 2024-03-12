import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { FaMessage} from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailLock } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xs0aas', 'template_v2rrtyh', form.current, '_saCpDjmvaxbFTD1d')
      .then((result) => {
          console.log(result.text);
        
      }, (error) => {
          console.log(error.text);
      });
  };

    const notify = () => toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });


  return (
    <div className="p-5">

        <div>

        </div>

        <div className="text-center">
          <h1 className="text-3xl bold text-blue-600">Contact Us</h1>
          <p className="pb-3 border-b-8">😊😊 Feel free to contacct us any time. We are looking for help you. 😊😊 </p>
        </div>

        <div className="flex mt-4">

          <div className="flex-1 border-r-2 border-blue-600 border-dashed">
            <div className="text-center mt-2 mb-2">
              <h1 className="text-2xl bold text-blue-600">Contact Us</h1>
              <p>You can contact us quickly using below informations</p>
            </div>
            <div className="m-10 flex flex-col gap-6">

              <div className="text-center">
                <div className="flex items-center gap-4">
                  <LuPhoneCall className="text-3xl text-blue-600"/>
                  <span className="text-lg"> +94 762 712200 , +94 701 2345</span>
                </div>
                <span> You Can Contact us 24/7. Our Support Team will Help You</span>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-4">
                  <MdOutlineMailLock className="text-3xl text-blue-600"/>
                  <span className="text-lg"> Sachingunasekare12345@gmail.com</span>
                </div>
                <span> You Can Contact us 24/7. Our Support Team will Help You</span>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-4">
                  <FaAddressCard className="text-3xl text-blue-600"/>
                  <span className="text-lg"> No 39 , New Malkaduwawa , Kurunegala</span>
                </div>
                <span> You Can Contact us 24/7. Our Support Team will Help You</span>
              </div>

              
            </div>
          </div>

          <form className="flex-col flex gap-6 mb-4 p-6 flex-1" onSubmit={sendEmail} >

            <div>
              <Label value="Your Name "/>
              <TextInput type="text" placeholder="Your Name" name="user_name" id="userMail" />
            </div>

            <div>
              <Label value="Your Email "/>
              <TextInput type="email" placeholder="Your Email " name="user_email" id="userPassword" />
            </div>

            <div>
              <Label value="Your Massage "/>
              <Textarea type="text" placeholder="Enter your massage here ..." name="message" id="userPassword" />
            </div>

            

            <Button gradientDuoTone="purpleToBlue" type="submit" onClick={notify} value="Send" outline>
              <div className="flex gap-3 items-center">
                <span>Send Message</span>
                <FaMessage/>
              </div>
            </Button>

          </form>

        </div>

    </div>
  )
}
