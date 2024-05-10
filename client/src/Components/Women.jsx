import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";


export default function Mens() {

    const [dress , setDress] = useState([]);

    useEffect(() => {
        const fetchDress = async () => {
            const res = await axios("/api/cloth/getWomen")
            setDress(res.data);
        }

        fetchDress();
    } , [])
  return (
    <div className="pt-20 pb-20 pl-10 pr-10">
        <h1 className="mb-10 text-4xl text-center ">Womens Collection</h1>
      <div className="w-full grid gap-10 grid-cols-4  ">

        {
            dress.map((item , index) => (
                <Card key={index}
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={item.imageUrl} 
    >
      <a href="#">
        <h4 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.dressName}</h4>
        <h5 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
          {item.Discription}
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <span className="text-l font-bold text-gray-900 dark:text-white">Rs . {item.price} /=</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-3 py-1 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
            ))
        }

    
    </div>
    </div>
  )
}
