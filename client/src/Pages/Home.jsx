/* eslint-disable react/no-unescaped-entities */
import { Card } from "flowbite-react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { CiHeadphones } from "react-icons/ci";
import SignUpBanner from "../Components/SignUpBanner";
import HomeCurosal from "../Components/HomeCurosal";
import Mens from "../Components/Mens";
import Women from "../Components/Women";


export default function Home() {
  return (
    <>

      <div className="m-6 justify-items-center gap-16 flex flex-col md:flex-row">
        <div className="flex gap-2 items-center">
          <div className="border-2 border-blue-600 rounded-full p-2">
            <CiDeliveryTruck
            size={50}
            />
          </div>
          <span>
            <h2>Quick Delivary</h2>
            <p>FAST DELIVARY</p>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="border-2 border-blue-600 rounded-full p-2">
            <GiClothes
            size={50}
            />
          </div>
          <span>
            <h2>Unique Cloths</h2>
            <p>UNIQUE BRANDED CLOTHING</p>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="border-2 border-blue-600 rounded-full p-2">
            <CiHeadphones
            size={50}
            />
          </div>
          <span>
            <h2>Quik Contact</h2>
            <p>24/7 CONTACT AND SUPPORT TEAM</p>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="border-2 border-blue-600 rounded-full p-2">
            <CiDeliveryTruck
            size={50}
            />
          </div>
          <span>
            <h2>Our Service</h2>
            <p>VARY GOOD CUSTOMER SERVICE</p>
          </span>
        </div>
      </div>

      <HomeCurosal/>

      <SignUpBanner/>

      <div className="flex m-3 gap-2">
          <Card className="max-w-sm hover:bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 cursor-pointer" imgSrc="/public/kids.jpeg" horizontal >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            KID'S
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          </Card>

        <Card className="max-w-sm hover:bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 cursor-pointer" imgSrc="/public/mens.jpeg" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            MEN'S
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>

        <Card className="max-w-sm hover:bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 cursor-pointer" imgSrc="/public/women.webp" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            WOMEN'S
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>

        
      </div>

      <Mens/>
      <Women/>
    </>
  )
}
