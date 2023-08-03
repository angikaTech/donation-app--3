import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Header from '@/copmonent/user/header'
import Sidebar from '@/copmonent/user/sidebar'
import Footer from '@/copmonent/user/footer'
import Rightsidbar from '@/copmonent/user/right-sidebar'
import Skin from '@/copmonent/user/skin'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProfile } from '../features/profile/profileSlice'
import { ToastContainer, toast } from 'react-toastify'
import { getPayee } from '@/features/paymenttable/paymenttableSlice'
import { base_url } from '@/utils/base_url'
import { totalamount1 } from '@/features/totalamount/totalamountSlice'
import moment from 'moment/moment'

export default function Profile() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfile());
        dispatch(getPayee());
        dispatch(totalamount1());

    }, []);


    // const profilestate = useSelector((state) => state.auth.user);
    // console.log(profilestate.name);
    const profilestate = useSelector((state) => state.profile.profile);
    const paymentstate = useSelector((state) => state.paymenttable.paymenttable);
    const amount = useSelector((state) => state.totalamount.totalamount);
    // const authstate = useSelector((state) => state.auth);




    return (

        <>
            <main>

                <div className="container-scroller">
                    <Header />

                    <div className="container-fluid page-body-wrapper">
                        {/* <Skin />
                        <Rightsidbar /> */}
                        <Sidebar />
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-md-12 grid-margin">
                                        <div className="row">
                                            <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                                                <h3 className="font-weight-bold">Welcome {profilestate.name}</h3>
                                                <h6 className="font-weight-normal mb-0">All systems are running smoothly! You have <span className="text-primary">0 unread alerts!</span></h6>
                                            </div>
                                            {/* <div className="col-12 col-xl-4">
                                                <div className="justify-content-end d-flex">
                                                    <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                                                        <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                            <i className="mdi mdi-calendar"></i>
                                                            Today (10 Jan 2021)
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                                                            <a className="dropdown-item" href="#">January - March</a>
                                                            <a className="dropdown-item" href="#">March - June</a>
                                                            <a className="dropdown-item" href="#">June - August</a>
                                                            <a className="dropdown-item" href="#">August - November</a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-3 grid-margin ">
                                        <div  >
                                            <div className=" mt-auto" >
                                                {/* <img src="http://localhost:5000/api/images/logo.jpeg" alt="people" */}
                                                <img src={base_url + "images/" + profilestate.document} alt="people"
                                                    // profilestate
                                                    style={{ borderRadius: "50%", height: "200px", width: "200px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-8 grid-margin transparent">
                                        <div className="row">
                                            <div className="col-md-12 mb-4 stretch-card transparent">
                                                <div className="card card-tale">
                                                    <div className="card-body">
                                                        <h3 className="mb-4">Persnal details</h3>
                                                        <p className="mb-2"><b>Organization  : </b>{profilestate.organization}</p>
                                                        <p className="mb-2"><b>Name : </b>{profilestate.name}</p>
                                                        <p className="mb-2"><b>Email : </b>{profilestate.email}</p>
                                                        <p className="mb-2"><b>Mobile  : </b>{profilestate.mobile}</p>
                                                        <p className="mb-2"><b>Address  : </b>{profilestate.address}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                                                <div className="card card-light-blue">
                                                    <div className="card-body">
                                                        <p className="mb-4">Total Amount Recived </p>
                                                        <p className="fs-30 mb-2 counter">{amount}</p>
                                                        {/* <p>2.00% (30 days)</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 stretch-card transparent">
                                                <div className="card card-light-danger">
                                                    <div className="card-body">
                                                        <p className="mb-4">Number of Payers</p>

                                                        <p className="fs-30 mb-2 counter">{paymentstate.length}</p>
                                                        {/* <p>0.22% (30 days)</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="card-title ">Last there transections</p>
                                                <div className="table-responsive">
                                                    <table className="table  display expandable-table">
                                                        <thead>
                                                            <tr>
                                                                <th>S.no</th>
                                                                <th>Name</th>
                                                                {/* <th>Transection no.</th> */}
                                                                <th>Amount</th>
                                                                <th>Mode of payment</th>
                                                                <th>Date</th>
                                                                <th>Download receipt</th>
                                                            </tr>
                                                        </thead>
                                                        {paymentstate.slice(0, 3).map((value, key) => {
                                                            return (


                                                                <tbody>
                                                                    <tr key={key}>
                                                                        <td>{key + 1}</td>
                                                                        <td >{value.name}</td>

                                                                        <td className="font-weight-bold">₹{value.amount}</td>
                                                                        <td >{value.payment_mode}</td>

                                                                        <td>

                                                                            {moment(value.createdAt).format('DD-MM-YYYY')}
                                                                        </td>
                                                                        < td className="font-weight-medium"><div className="badge badge-success">Download</div></td>
                                                                        {/* {value.payment_status === "pending" ?
                                                                            < td className="font-weight-medium"><div className="badge badge-warning">{value.payment_status}</div></td>
                                                                            : value.payment_status === "success" ?
                                                                                < td className="font-weight-medium"><div className="badge badge-success" >{value.payment_status}</div></td>
                                                                                : value.payment_status === "cancelled" ?
                                                                                    < td className="font-weight-medium"><div className="badge badge-danger" > {value.payment_status}</div></td>
                                                                                    : < td className="font-weight-medium"><div className="badge " > No data</div></td>

                                                                        } */}
                                                                    </tr>

                                                                </tbody>
                                                            )
                                                        })}

                                                    </table>
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

            </main>
        </>
    )
}