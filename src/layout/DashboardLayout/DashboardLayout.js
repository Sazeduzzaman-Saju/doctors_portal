import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Page/Shared/Header/Header';


const DashboardLayout = () => {

    return (
        <>
            <Header></Header>
            <div class="container">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <Link class="nav-item" to={'/dashboard/allusers'}>
                                    <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">All Users</span>
                                </Link>
                                <li>
                                    <a href="/#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                                </li>
                                <li>
                                    <a href="/#" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                                </li>
                                <li>
                                    <a href="/#" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col py-3">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;