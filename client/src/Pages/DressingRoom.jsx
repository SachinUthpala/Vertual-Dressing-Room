import { useState } from "react";
import MensDressing from "../Components/MensDressing";
import WomenDressingRoom from "../Components/WomenDressingRoom";
import { Button } from "flowbite-react";

export default function DressingRoom() {

  const [gender , setGender] = useState('Male');

  return (
    <div>
      <div className="flex justify-center gap-4 mt-2">
      <Button onClick={() => setGender('Male')}>Mens Collection</Button>
      <Button onClick={() => setGender('Women')}>Womens Collection</Button>
      </div>
      {
        gender === 'Male' ? (
          <MensDressing/>
        ) : (
          <WomenDressingRoom/>
        )
      }
    </div>
  )
}
