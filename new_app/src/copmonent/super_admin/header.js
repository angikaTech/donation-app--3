"use client"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Script from "next/script";
import { base_url } from "@/utils/base_url";


export default function Header() {
    const dispatch = useDispatch();


    const router = useRouter();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    // user = JSON.stringify
    // useEffect(() => {
    //     dispatch(getUsers());
    // })
    const admin = JSON.stringify(user);
    // console.log(admin.role)
    useEffect(() => {
        if (user) {
            if (user.role === "admin") {
                router.push('')
            } else {
                router.push('login')
            }

        } else {
            router.push('/')
        }

    }, [user, isLoading, isError, isSuccess]
    );










    const handleLogout = () => {

        localStorage.clear();
        window.location.reload();
    }
    return (

        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo mr-5" href="/list-admin">
                    {/* <img src="images/logo.svg" className="mr-2" alt="logo" /> */}
                    <Image
                        src="/images/logo.png"
                        width={500}
                        height={500}
                        alt="logo"
                    />
                </a>
                <a className="navbar-brand brand-logo-mini" href="/list-admin">
                    {/* <img src="images/logo-mini.svg" alt="logo" /> */}
                    <Image
                        src="/images/logo-mini.png"
                        width={500}
                        height={500}
                        alt="logo"
                    />
                </a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span className="icon-menu"></span>
                </button>
                <ul className="navbar-nav mr-lg-2">
                    <li className="nav-item nav-search d-none d-lg-block">
                        <div className="input-group">
                            <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                <span className="input-group-text" id="search">
                                    {/* <i className="icon-search"></i> */}
                                </span>
                            </div>
                            {/* <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" /> */}
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown">
                        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                            <i className="icon-bell mx-0"></i>
                            <span className="count"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                            <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-success">
                                        <i className="ti-info-alt mx-0"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal">No Notifications</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        {/* Just now */}
                                    </p>
                                </div>
                            </a>
                            {/* <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-warning">
                                        <i className="ti-settings mx-0"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal">Settings</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        Private message
                                    </p>
                                </div>
                            </a>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-info">
                                        <i className="ti-user mx-0"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        2 days ago
                                    </p>
                                </div>
                            </a> */}
                        </div>
                    </li>
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                            {/* <img src="images/faces/face28.jpg" alt="profile" /> */}
                            {/* <Image
                                href="/images/faces/face28.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            /> */}
                            <img src={base_url + "images//logo.jpeg"} width={500}
                                height={500} alt="people"></img>

                        </a>
                        {/* <img src={base_url + "images/" + profilestate.document} alt="profile" /> */}
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a className="dropdown-item" href="settings">
                                <i className="ti-settings text-primary"></i>
                                Settings
                            </a>
                            <a onClick={handleLogout} className="dropdown-item">
                                <i className="ti-power-off text-primary"></i>
                                Logout
                            </a>
                        </div>
                    </li>
                    {/* <li className="nav-item nav-settings d-none d-lg-flex">
                        <a className="nav-link" href="#">
                            <i className="icon-ellipsis"></i>
                        </a>
                    </li> */}
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="icon-menu"></span>
                </button>
            </div>

        </nav>

    )

}