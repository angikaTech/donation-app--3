'use client'
import Head from 'next/head'
import Header from '@/copmonent/super_admin/header'
import Sidebar from '@/copmonent/super_admin/sidebar'
import Footer from '@/copmonent/user/footer'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { base_url } from '@/utils/base_url'
import axios from 'axios'
import { config } from '@/utils/axiosconfig'
import moment from 'moment'
// import second from ''
export default function SuperAdminProfile() {

    const router = useRouter();
    const id1 = router.query.id;
    console.log(id1);



    const [profiles, setprofiles] = useState([]);

    useEffect(() => {
        const data = axios.get(`${base_url}user/${id1}`, config).then((response) => {

            setprofiles(response.data);



        });

    }, [id1])




    console.log(profiles)








    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Skydash Admin</title>
                <script src="/js/template.js"></script>

            </Head>
            <main>
                <div className="container-scroller">
                    <Header />
                    <div className="container-fluid page-body-wrapper">
                        <Sidebar />
                        {/* <nav className="sidebar sidebar-offcanvas" id="sidebar1">
                            <ul className="nav">

                               
                                <li className="nav-item">
                                    <a href="/list-admin" className="menu-title" style={{ alignContent: "center", padding: "10px 40px 10px  40px", backgroundColor: "#4b49ac", color: "white", width: "100 %", borderRadius: "10px" }}>back</a >
                                </li>
                            </ul>
                        </nav> */}


                        <div className="main-panel">
                            <div className="content-wrapper" style={{ width: "100%" }}>


                                <div className="row">
                                    <div className="col-md-8 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="card-title ">User details </p>
                                                <div className="table-responsive">
                                                    <table className="table  display expandable-table">


                                                        <tbody  >
                                                            <tr>
                                                                <td >Name </td>
                                                                <td >{profiles.name} </td>
                                                            </tr>
                                                            <tr>
                                                                <td >Email</td>
                                                                <td >{profiles.email} </td>
                                                            </tr>
                                                            <tr>
                                                                <td >Mobile No. </td>
                                                                <td >{profiles.mobile} </td>
                                                            </tr>
                                                            <tr>
                                                                <td >Organization </td>
                                                                <td >{profiles.organization} </td>
                                                            </tr>
                                                            <tr>
                                                                <td >User role</td>
                                                                <td >{profiles.role} </td>
                                                            </tr>
                                                            <tr>
                                                                <td >Account created at  </td>
                                                                <td >{moment(profiles.createdAt).format('DD-MM-YYYY')}</td>
                                                            </tr>
                                                            <tr>
                                                                <td >Account updated at </td>
                                                                <td >{moment(profiles.updatedAt).format('DD-MM-YYYY')} </td>
                                                            </tr>

                                                            <tr>
                                                                <td >Profile Status </td>
                                                                <td >{profiles.isBlocked === true ? <>Blocked</> : <>Unblocked</>} </td>
                                                            </tr>
                                                            <tr>
                                                                <td >Subscription  </td>
                                                                <td >{profiles.isSubscribed === true ? <>Subscribed</> : <>Not Subscribed</>} </td>
                                                            </tr>

                                                            <tr>
                                                                <td >User id  </td>
                                                                <td >{profiles._id} </td>
                                                            </tr>

                                                            <tr>
                                                                <td >Address </td>
                                                                <td >{profiles.address} </td>
                                                            </tr>


                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className=" mt-auto" >
                                                    <p className="card-title ">Profile Image </p>
                                                    <img src={base_url + "images/" + profiles.document} alt="people"

                                                        style={{ borderRadius: "50%", height: "200px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <Footer />


                        </div>
                    </div>
                </div>

            </main >
        </>
    )
}