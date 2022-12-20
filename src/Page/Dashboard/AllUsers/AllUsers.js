import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const AllUsers = () => {
    const { user } = useContext(AuthContext)
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('User Role Updated')
                    refetch();
                }
            })
    }
    console.log(allUsers)
    return (
        <div>
            <h1>All Users</h1>
            <div class="container mt-5">
                <table class="table">
                    <thead>
                        <tr className='bg-warning'>
                            <th scope="col">Sl No</th>
                            <th scope="col">Profile</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Admin</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers?.map((users, i) =>
                            <tr key={users._id}>
                                <th scope="row">{i + 1}</th>
                                <td>
                                    <img src={user.photoURL} className="rounded-circle" alt="" style={{ width: '60px', height: "60px" }} />
                                </td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>
                                    {users?.role !== 'admin' && <button onClick={() => handleMakeAdmin(users._id)} className='btn btn-primary'>Make Admin</button>}
                                    {users?.role === 'admin' && <button onClick={() => handleMakeAdmin(users._id)} className='btn btn-info'>Admin</button>}
                                </td>
                                <td>
                                    <button className='btn btn-danger'>Remove</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;