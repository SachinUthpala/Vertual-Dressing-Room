import { useState } from "react";
import MensDressing from "../Components/MensDressing";

export default function DressingRoom() {

  const [gender , setGender] = useState('Male');

  return (
    <div>
      {
        gender === 'Male' ? (
          <MensDressing/>
        ) : (
          <h1>Women</h1>
        )
      }
    </div>
  )
}
