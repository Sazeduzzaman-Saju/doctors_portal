import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/icons/logo.webp'
import { AuthContext } from '../../../context/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    console.log(user)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('User Sign out Successful')
            })
            .catch(err => console.log(err))
    }

    // All Menus
    const menuItems =
        <>
            <Nav.Link as={NavLink} to={'/home'}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={'/reviews'}>Reviews</Nav.Link>
            <Nav.Link as={NavLink} to={'/appointments'}>Appointment</Nav.Link>
            <Nav.Link as={NavLink} to={'/about'}>About</Nav.Link>
            <Nav.Link as={NavLink} to={'/contact'}>Contact</Nav.Link>
            {user?.uid ?
                <><Nav.Link as={NavLink} to={'/dashboard'}>Dashboard</Nav.Link></> : <></>
            }
        </>

    return (
        <Navbar bg="white" expand="lg" className='' sticky="top" >
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} className="w-25 p-0" alt="brand logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {menuItems}
                    </Nav>
                    <div>
                        {user?.uid ?
                            <>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Nav.Link as={NavLink} to={'/login'} onClick={handleSignOut}>SignOut</Nav.Link>
                                    <p>{user?.name}</p>
                                    <Image roundedCircle style={{ width: '30px', height: '30px' }}
                                        src={user?.photoURL} className='ms-3'></Image>
                                </div>
                            </>
                            :
                            <>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Nav.Link as={NavLink} to={'/login'}>Login</Nav.Link>
                                    <div className='fs-3 ms-3'>
                                        <FaUserCircle></FaUserCircle>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar >
    );
};

export default Header;