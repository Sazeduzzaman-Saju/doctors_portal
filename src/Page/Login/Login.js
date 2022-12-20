import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleSignIn from '../../comps/GoogleSignIn/GoogleSignIn';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken/useToken';
import useWebTitle from '../../hooks/useWebTitle/useWebTitle';
import './Login.css';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { loginUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }
    const handleLogIn = (data) => {
        setLoginError('');
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                reset('');

            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
            })
    }

    useWebTitle('Login')

    return (
        <div className='container pt-100 pb-100'>
            <p className='text-center fs-5 m-0 primary-color text-uppercase'>Welcome To Home</p>
            <h1 className='text-center font-bold primary-color text-uppercase'>Login </h1>
            <div className='row mt-5 mb-5 shadow rounded w-75 mx-auto h-100'>
                <div className='col-lg-6 col-sm-1 p-5 ' >
                    <form onSubmit={handleSubmit(handleLogIn)}>
                        <input
                            {...register("email", {
                                required: 'Email Address Required'
                            })}
                            placeholder="Email"
                            className='border-primary '
                        />
                        {errors.email && <p className='text-danger mb-5'>{errors.email?.message}</p>}
                        <input
                            {...register("password", {
                                required: 'Password Required'
                            })}
                            placeholder="Password"
                            className='border-primary mt-3'
                        />
                        {errors.password && <p className='text-danger '>{errors.password?.message}</p>}
                        <input type="submit" />
                    </form>
                    <div className='text-danger text-center fw-bold'>
                        <p>{loginError.slice(10, 38)}</p>
                    </div>
                    <div className='text-center mt-3'>
                        <p>Forgot
                            <>
                                <Link to={'/forgot-password'}> Password</Link>
                            </>
                        </p>
                        <p>Don't Have Account?
                            <>
                                <Link to={'/signup'}> Register Now</Link>
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
        </div>
    );
};

export default Login;