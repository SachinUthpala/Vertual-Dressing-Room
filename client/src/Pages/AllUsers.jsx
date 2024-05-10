import { useEffect, useState } from "react";
import axios from 'axios';
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";

export default function AllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios("/api/user/all");
            setUsers(res.data);
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            const res = await fetch(`/api/user/gestdelete/${userId}` , {
                method :'DELETE'
            } );
            // Assuming you want to update the UI after deletion, you can refetch the users
            const updatedUsers = users.filter(user => user._id !== userId);
            setUsers(updatedUsers);
        } catch (error) {
            console.log( error);
        }
    };

    return (
        <div className="overflow-x-auto mt-5 mb-5 pl-5 pr-5">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Image</Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Password</Table.HeadCell>
                    <Table.HeadCell>Admin Access</Table.HeadCell>
                    <Table.HeadCell>Delete</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {users.map((user, index) => (
                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                <img src={user.profilePicture} width={'60px'} alt="" />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {user.username}
                            </Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>######..</Table.Cell>
                            <Table.Cell>
                                <Button color={user.isAdmin ? "success" : "failure"}>
                                    {user.isAdmin ? "Admin" : "Customer"}
                                </Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => handleDelete(user._id)}>Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}
