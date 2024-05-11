import axios from "axios";
import { Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";


export default function DressUpdate() {

    const {id} = useParams();
    console.log(id);

    const [dress , setDress] = useState([]);

    useEffect(() => {
        const fetchDress = async () => {
         
            const res = await axios(`/api/cloth/getDress/${id}`)
            setDress(res.data)
        }
    
        fetchDress()
      },[id])

      console.log(dress);
  return (
<div className="mt-10 mb-10 ml-10 mr-10">
    
<form className='flex flex-col gap-4'>
    <img src={dress.imageUrl} width="300px" className="ml-52" height="400px" alt="" />
        <TextInput type='text' placeholder='dressName' defaultValue={dress.dressName} id="dressName" />
        <TextInput type='text' placeholder='genderType' defaultValue={dress.genderType} id="genderType" />
        <TextInput type='text' placeholder='Discription' defaultValue={dress.Discription} id="genderType"  />
        
        <Link to="/all-dress">
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>Update</Button>
        </Link>
      </form>
    
</div>

  )
}
