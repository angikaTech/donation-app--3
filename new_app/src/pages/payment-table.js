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
import { getPayee } from '@/features/paymenttable/paymenttableSlice'





// const inter = Inter({ subsets: ['latin'] })

export default function PaymentTable() {



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPayee());

    }, []);

    const paymentstate = useSelector((state) => state.paymenttable.paymenttable
    );

    // console.log(paymentstate.length)
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="container-scroller">
                    <Header />

                    <div className="container-fluid page-body-wrapper">
                        <Skin />
                        <Rightsidbar />
                        <Sidebar />
                        <div className="main-panel">
                            <div className="content-wrapper">


                                <div className="row">
                                    <div className="col-md-12 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="card-title ">All Transections</p>

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
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {paymentstate.map((value, key) => {

                                                                return (

                                                                    <tr key={key}>
                                                                        <td>{key + 1}</td>
                                                                        <td >{value.name}</td>
                                                                        {/* <td>9879278397823</td> */}
                                                                        <td className="font-weight-bold">₹{value.amount}</td>
                                                                        <td >{value.payment_mode}</td>
                                                                        <td>{value.createdAt}</td>
                                                                        {/* {value.payment_status === "pending" ?

                                                                            < td className="font-weight-medium"><div className="badge badge-warning"
                                                                            >{value.payment_status}</div></td> : < td className="font-weight-medium"><div className="badge badge-success"
                                                                            >{value.payment_status}</div></td>} */}
                                                                        {value.payment_status === "pending" ?
                                                                            < td className="font-weight-medium"><div className="badge badge-warning">{value.payment_status}</div></td>
                                                                            : value.payment_status === "success" ?
                                                                                < td className="font-weight-medium"><div className="badge badge-success" >{value.payment_status}</div></td>
                                                                                : value.payment_status === "cancelled" ?
                                                                                    < td className="font-weight-medium"><div className="badge badge-danger" > {value.payment_status}</div></td>
                                                                                    : < td className="font-weight-medium"><div className="badge " > No data</div></td>

                                                                        }
                                                                    </tr>


                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <tr>
                                                                        <td>2.</td>
                                                                        <td>xyzabc</td>
                                                                       
                                                                        <td className="font-weight-bold">$523</td>
                                                                        <td>online</td>
                                                                        <td>30 Jun 2018</td>
                                                                        <td className="font-weight-medium"><div className="badge badge-warning">Pending</div></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3.</td>
                                                                        <td>xyzabc</td>
                                                                        
                                                                        <td className="font-weight-bold">$781</td>
                                                                        <td>online</td>
                                                                        <td>01 Nov 2018</td>
                                                                        <td className="font-weight-medium"><div className="badge badge-danger">Cancelled</div></td>
                                                                    </tr> */}

                            </div>
                            <Footer />


                        </div>
                    </div>
                </div >

            </main >
        </>
    )
}