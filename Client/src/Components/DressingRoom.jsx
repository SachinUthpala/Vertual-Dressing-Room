import { Button, Table } from "flowbite-react";
import { useState } from "react";

export default function DressingRoom() {

    const [shirt , setShirt] = useState('');
    const [trouser , Settriuser] = useState('');

  return (
    <div className="flex aline-center justify-between gap-5 p-5 mb-36">
        <div className="overflow-x-auto ">
            <Table striped>
                <Table.Head>
                <Table.HeadCell>Product Img</Table.HeadCell>
                <Table.HeadCell>Product name</Table.HeadCell>
                <Table.HeadCell>Color</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>
                    <span className="sr-only">Try Now</span>
                </Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <img src="./public/shirts.png"  width={'50px'} height={'60px'} />
                    </Table.Cell>
                    <Table.Cell>Shirt</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                    <Table.Cell>Men</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={() => setShirt('./public/shirts.png')}>
                        Try Now 
                    </a>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <img src="./public/tr.png" alt=""  width={'50px'} height={'60px'} />
                    </Table.Cell>
                    <Table.Cell>White</Table.Cell>
                    <Table.Cell>Laptop PC</Table.Cell>
                    <Table.Cell>$1999</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={() => Settriuser('./public/tr.png')}>
                        Try Now 
                    </a>
                    </Table.Cell>
                </Table.Row>
                
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <img src="./public/s22.png"  width={'50px'} height={'60px'} />
                    </Table.Cell>
                    <Table.Cell>Shirt</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                    <Table.Cell>Men</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={() => setShirt('./public/s22.png')}>
                        Try Now 
                    </a>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Google Pixel Phone
                    </Table.Cell>
                    <Table.Cell>Gray</Table.Cell>
                    <Table.Cell>Phone</Table.Cell>
                    <Table.Cell>$799</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Try Now
                    </a>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</Table.Cell>
                    <Table.Cell>Red</Table.Cell>
                    <Table.Cell>Wearables</Table.Cell>
                    <Table.Cell>$999</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Try Now 
                    </a>
                    </Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            </div>
        <div className=" flex flex-col text-center i mr-20">
            <form className="flex gap-5" >
                <Button color="blue">Men</Button>
                <Button color="purple">Women</Button>
            </form>
            <div className="dummy mt-20 ">
                <div className="dress flex flex-col items-center">
                    <img src={shirt} alt="" width={'150px'} className="z-10" />
                    <img src={trouser} alt=""  width={'150px'} className="absolute mt-20"/>
                </div>
            </div>
        </div>
    </div>
  )
}
