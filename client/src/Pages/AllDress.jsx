import { useEffect,useState } from "react"
import axios from 'axios'
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

export default function AllDress() {

  const [dress, setDress] = useState([])
  useEffect(() => {
    const fetchDress = async () => {
      const res = await axios("/api/cloth/get")

      setDress(res.data)
    }

    fetchDress()
  },[])

  const handleDelete = async(id) => {
   try {
    const res = await axios.delete(`/api/cloth/delete/${id}`)
    console.log(res);

    setDress((prev) =>
      prev.filter((post) => post._id !== id)
    );
   } catch (error) {
    console.error(error);
   }
    
  } 

  console.log(dress);
  return (
    <div className="overflow-x-auto mt-5 mb-5 pl-5 pr-5">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Gender Type</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            Edit
          </Table.HeadCell>
          <Table.HeadCell>
            Delete
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

{
  dress.map((item , index)=>(
    
    <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell>
      <img src={item.imageUrl} width={'100px'} alt="" />
    </Table.Cell>
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {item.dressName}
    </Table.Cell>
    <Table.Cell>{item.genderType}</Table.Cell>
    <Table.Cell>{item.Discription}</Table.Cell>
    <Table.Cell>Rs . {item.price} /=</Table.Cell>
    <Table.Cell>
      <Link to={`/updateDress/${item._id}`}>
        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          Edit
        </a>
      </Link>
    </Table.Cell>
    <Table.Cell>
      <a onClick={() => handleDelete(item._id)} href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
        Delete
      </a>
    </Table.Cell>
  </Table.Row>
  ))
}
          
          
        </Table.Body>
      </Table>
    </div>
  );
}
