import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Header from '@/copmonent/super_admin/header'
import Sidebar from '@/copmonent/super_admin/sidebar'
import Footer from '@/copmonent/user/footer'
import Skin from '@/copmonent/user/skin'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUsers } from '../features/customers/customerSlice'
import { getProfile } from '@/features/profile/profileSlice'
import { useRouter } from 'next/router'
import Link from 'next/link'


// const inter = Inter({ subsets: ['latin'] })

export default function SuperAdminList() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
        // dispatch(getProfile());
        dispatch(getProfile());

    }, []);
    const customerstate = useSelector((state) => state.customer.customers);
    const profilestate = useSelector((state) => state.profile.profile)
    // const getProfile = use
    // console.log(customerstate[0].isSubscribed)
    // console.log(profilestate._id)

    const router = useRouter();
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
                        {/* <Skin /> */}

                        <Sidebar />
                        <div className="main-panel">
                            <div className="content-wrapper">


                                <div className="row">
                                    <div className="col-md-12 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="card-title ">Users </p>
                                                <div className="table-responsive">
                                                    <table className="table  display expandable-table">

                                                        <thead>
                                                            <tr>
                                                                <th>S.no</th>
                                                                <th>Name</th>
                                                                <th>Role</th>
                                                                <th>Mobile no.</th>
                                                                <th>Subscribed</th>
                                                                {/* <th>Blocked</th> */}
                                                                <th>Profile</th>
                                                            </tr>
                                                        </thead>
                                                        {customerstate.map((value, key) => {

                                                            const id = value._id;
                                                            return (
                                                                <tbody  >
                                                                    <tr>
                                                                        <td>{key + 1}</td>
                                                                        <td >{value.name} </td>
                                                                        <td >{value.role} </td>
                                                                        <td>{value.mobile}</td>

                                                                        {value.isSubscribed == true ? <td>Subscribed</td> : <td>Not Subscribed</td>}
                                                                        {/* {value.isBlocked == true ? <td>Blocked</td> : <td>Unblocked</td>} */}
                                                                        <td className="font-weight-medium">
                                                                            {/* <button className="badge badge-success">
                                                                                <a onClick={() => {
                                                                                    router.push(`/profile-admin/[${value._id}]`)
                                                                                   

                                                                                }}>

                                                                                    Profile
                                                                                </a>
                                                                            </button> */}

                                                                            <Link legacyBehavior
                                                                                href={{
                                                                                    pathname: `profile-admin/[id]`,
                                                                                    query: { id: id },
                                                                                }}
                                                                            >
                                                                                <a>Details</a>
                                                                            </Link>
                                                                        </td>
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

            </main >
        </>
    )
}