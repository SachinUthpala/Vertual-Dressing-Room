import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";


export default function WomenDressingRoom() {

    const [dress , setDress] = useState([]);
  const [top , setTop] = useState(null);
  const [bottom , setbottom] = useState(null);
    useEffect(() => {
        const fetchDress = async () => {
            const res = await axios("/api/cloth/getWomen")
            setDress(res.data);
        }

        fetchDress();
    } , [])



  return (
    <div className="flex p-5  mb-10 justify-between">
        <div className="border-r-4 border-black">
          <div className="pt-20 pb-20 pl-10 pr-10">
        <h1 className="mb-10 text-4xl text-center ">Womens Collection</h1>
      <div className="w-full grid gap-10 grid-cols-2  ">

        {
            dress.map((item , index) => (
                <Card key={index}
      className="w-64"
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
        {
          item.clothType === "Top" ? (
            <a
        onClick={() => setTop(item.imageUrl)}
          href="#"
          className="rounded-lg bg-cyan-700 px-3 py-1 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Try Now
        </a>
          ) : (
            <a
        onClick={() => setbottom(item.imageUrl)}
          href="#"
          className="rounded-lg bg-cyan-700 px-3 py-1 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Try Now
        </a>
          )
        }
      </div>
    </Card>
            ))
        }

    
    </div>
    </div>
      </div>
        <div className="flex-1 items-center justify-center">
        <h1 className="mb-10 text-4xl text-center ">Dress Matching Room</h1>
        <div className="items-center justify-center ml-36">
          {/* <img src="./public/boy.png" alt="" /> */}
          <img src={top} alt="" className="" width="400px"/>
          <img src={bottom   } alt="" className="" width="400px" />
        </div>
        </div>
    </div>
  )
}
