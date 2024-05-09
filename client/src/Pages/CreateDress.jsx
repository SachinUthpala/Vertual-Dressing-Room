import { Button, FileInput, Select, TextInput } from "flowbite-react";
import { useState } from "react";




export default function CreateDress() {

    const [formData , setFormData] = useState({});
    console.log(formData);




  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4' >
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput type="text" placeholder="Dress Name" id="dressName" className="flex-1"
            onChange={(e) =>
                setFormData({ ...formData, dressName: e.target.value })
              }
            />
            <Select id="genderType"
            onChange={(e) =>
                setFormData({ ...formData, genderType: e.target.value })
              }
            >
                <option value="Men">men</option>
                <option value="Women">Women</option>
            </Select>

        </div>
        <div className="flex gap-4 items-center justify-between border-4
            border-teal-500 border-dotted p-3">
        <FileInput type='file' accept='image/*' />
        <Button type='button' gradientDuoTone='purpleToBlue' size='sm' outline>Upload image</Button>
        </div>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput type="text" placeholder="Discription" id="discription" className="flex-1"
            onChange={(e) =>
                setFormData({ ...formData, discription: e.target.value })
              }
            />
            <TextInput type="number" placeholder="Price" id="price" className="flex-1"
            onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
        </div>
        <Button type='submit' gradientDuoTone='purpleToPink'>
          Create Dress
        </Button>
      </form>
    </div>
  )
}
