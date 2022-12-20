import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignIn from '../../comps/GoogleSignIn/GoogleSignIn';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken/useToken';



const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();


    if (token) {
        navigate('/');
    }
    const handleSignIn = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('Sign Up Successfully Done')

                const userInfo = {
                    displayName: data.name,
                    photoURL: data.profile
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }
    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email)
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='container pt-100 pb-100'>
            <p className='text-center fs-5 m-0 primary-color text-uppercase'>Welcome To Register</p>
            <h1 className='text-center font-bold primary-color text-uppercase'>Register </h1>
            <div className='row mt-5 mb-5 shadow rounded w-75 mx-auto h-100'>
                <div className='col-lg-6 col-sm-1 p-5 ' >
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <input
                            {...register("name", {
                                required: 'Your Name Required'
                            })}
                            className='border-primary '
                            placeholder="Inter Your Name"
                        />
                        {errors.name && <p className='text-danger mb-5'>{errors.name?.message}</p>}

                        <input
                            {...register("profile", {
                                required: 'Your Profile Image Required'
                            })}
                            placeholder="Inter Profile Image"
                            className='border-primary mt-3'
                        />
                        {errors.profile &&
                            <p className='text-danger mb-5'>{errors.profile?.message}</p>}

                        <input
                            {...register("email", {
                                required: 'Email Address Required'
                            })}
                            placeholder="Email"
                            className='border-primary mt-3'
                        />
                        {errors.email &&
                            <p className='text-danger mb-5'>{errors.email?.message}</p>}

                        <input
                            {...register("password", {
                                required: 'Password Required'
                            })}
                            type='password'
                            placeholder="Password"
                            className='border-primary mt-3'
                        />
                        {errors.password &&
                            <p className='text-danger '>{errors.password?.message}</p>}

                        <input type="submit" />
                    </form>
                    <div className='text-center mt-3'>
                        <p>Have Account?
                            <>
                                <Link to={'/login'}> Login Now</Link>
                            </>
                        </p>
                    </div>
                    <GoogleSignIn></GoogleSignIn>
                </div>
                <div className='col-lg-6 col-sm-1 text-white text-center side-bg d-flex flex-column justify-content-center align-items-center'>
                    <h1>Welcome Back</h1>
                    <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, maiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fugiat pariatur quam dignissimos quia tempore laudantium nobis cupiditate explicabo eaque nulla ea, at, magnam velit accusantium esse sed vitae! Reprehenderit.</p>
                </div>


            </div>
            <div className='text-danger text-center'>

            </div>
        </div>
    );
};

export default SignUp;