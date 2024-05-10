import { useEffect,useState } from "react"
import axios from 'axios'
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";

export default function AllUsers() {

    const [user, setUser] = useState([]);
    const [userId , setUserId] = useState(null);
    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios("/api/user/all")
  
        setUser(res.data)
      }
  
      fetchUser()
    },[])
  
    // const handleChange = (e) => {
    //     setUserId( e.target.value );
    //   };
    

    const handleDelete = (e) => {
        e.preventDefault();
        console.log(userId);
    }


  return (
    <div className="overflow-x-auto mt-5 mb-5 pl-5 pr-5">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Password</Table.HeadCell>
          <Table.HeadCell>Admin Access</Table.HeadCell>
          <Table.HeadCell>
            Delete
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

{
  user.map((item , index)=>(
    
    <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell>
      <img src={item.profilePicture} width={'60px'} alt="" />
    </Table.Cell>
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {item.username}
    </Table.Cell>
    <Table.Cell>{item.email}</Table.Cell>
    <Table.Cell>######..</Table.Cell>
    <Table.Cell>
        {
            item.isAdmin === true ? 
                <Button color="success">Admin</Button>
             : <Button color="failure">Customer</Button>

            
        }
    </Table.Cell>
    <Table.Cell>
      <form onSubmit={handleDelete} >
        <input type="hidden" name="id" id="id"  />
        <button onClick={() => setUserId(item._id)}>Delet</button>
      </form>
    </Table.Cell>
  </Table.Row>
  ))
}
        </Table.Body>
      </Table>
    </div>
  )
}
