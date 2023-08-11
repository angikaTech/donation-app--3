import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/copmonent/user/header'
import Sidebar from '@/copmonent/user/sidebar'
import Footer from '@/copmonent/user/footer'
import Rightsidbar from '@/copmonent/user/right-sidebar'
import Skin from '@/copmonent/user/skin'
import { base_url } from '@/utils/base_url'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '@/features/profile/profileSlice'


// const inter = Inter({ subsets: ['latin'] })

export default function Settings() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfile());
    }, []);
    const profilestate = useSelector((state) => state.profile.profile);


    let id;
    if (typeof window !== 'undefined') {
        id = JSON.parse(localStorage.getItem("id"));

    }


    const formik = useFormik({


        initialValues: {
            file: "",
            id: id,
            organization: ""

        },
        // validationSchema: schema,
        onSubmit: async (values) => {

            // dispach(createPayee(values));



            const formData = new FormData();
            const filename = Date.now() + values.file.name;

            formData.append("name", filename);
            formData.append("file", values.file);
            values.document = filename;
            // console.log(values);

            try {
                // this api will deliver file data to file directry 
                const response = await axios.post(`${base_url}upload`, formData)

                // This api will deliver file name to database
                const response2 = await axios.post(`${base_url}upload/logo`, values)
                console.log(values)
                window.location.reload();

            } catch (err) { console.log(err) }
        },

    });
    const [organization, setorganization] = useState("")
    const updateOrgnization = async (e) => {


        let _id;
        if (typeof window !== 'undefined') {
            _id = JSON.parse(localStorage.getItem("id"));

        }
        const data = { organization, _id }
        console.log(data)
        try {
            const res1 = await axios.put(`${base_url}user/edite-user`, data).then((response) => {
                window.location.reload();


            })

        } catch (err) {
            throw new Error('Failed to update.');
        }

    };

    const [mobile, setmobile] = useState("")
    const updateMobile = async (e) => {


        let _id;
        if (typeof window !== 'undefined') {
            _id = JSON.parse(localStorage.getItem("id"));

        }
        const data = { mobile, _id }
        console.log(data)
        try {
            const res1 = await axios.put(`${base_url}user/edite-user`, data).then((response) => {
                window.location.reload();


            })

        } catch (err) {
            throw new Error('Failed to update.');
        }

    };


    const [password, setPassword] = useState("")
    const updatePassword = async (e) => {


        let _id;
        if (typeof window !== 'undefined') {
            _id = JSON.parse(localStorage.getItem("id"));

        }
        const data = { password, _id }
        console.log(data)
        try {
            const res1 = await axios.put(`${base_url}user/update-password`, data).then((response) => {
                window.location.reload();


            })

        } catch (err) {
            throw new Error(err);
        }

    };
    return (
        <>
            <Head>
                <title>Donation app</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                                    <div className="col-md-4 grid-margin "> </div>
                                    <div className="col-md-4 grid-margin ">
                                        <form onSubmit={formik.handleSubmit} encType="multipart/form-data" >


                                            <div className=" mt-auto" >
                                                {/* <img src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg" alt="people" */}
                                                <img src={base_url + "images/" + profilestate.document} alt="people"
                                                    style={{ borderRadius: "50%", height: "200px", width: "200px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}
                                                />
                                            </div>

                                            {/* photo update model start */}
                                            <div className='mt-4 ml-4'>
                                                <button type="button" className="btn btn-danger btn-lg" data-toggle="modal" data-target="#myModal">Update</button>
                                                <div className="modal fade" id="myModal" role="dialog">
                                                    <div className="modal-dialog">


                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                                <h4 className="modal-title"></h4>
                                                            </div>
                                                            <div className="content-wrapper">
                                                                <div className="row">
                                                                    <div className="col-md-3 grid-margin ">
                                                                    </div>
                                                                    <div className="col-md-3 grid-margin ">
                                                                        <div className=" mt-auto" >
                                                                            <img src={base_url + "images/" + profilestate.document} alt="people"

                                                                                style={{
                                                                                    height: "200px", width: "200px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center"
                                                                                }}
                                                                            />
                                                                        </div>

                                                                        <input type='file' style={{ margin: "25px 0px 0px 0px" }} accept="application/image/jpeg,image/png"
                                                                            // onChange={formik.handleChange("file")}
                                                                            // required
                                                                            onChange={(event) => formik.setFieldValue('file', event.target.files[0])}
                                                                        // value={formik.values.file}
                                                                        />
                                                                        {/* <input type='string'
                                                                            onChange={formik.handleChange("organization")}
                                                                            value={formik.values.organization} /> */}
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="modal-footer " style={{ textAlign: "center" }} >
                                                                {/* <button type="button" className="btn btn-default" data-dismiss="modal">Close</button> */}
                                                                <button type='submit' className="btn btn-danger btn-sm" style={{ margin: "25px 25px 0px 25px" }}>Upload</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* photo update model end */}
                                        </form >
                                    </div>
                                </div>
                                <div className='container mt-5'>
                                    <div className='row ml-5'>
                                        <div className='col-md-4'>
                                            <h6 className='mt-3 mr-3'>Organization : {profilestate.organization} </h6>
                                        </div>
                                        <button className='btn btn-danger mb-3 btn-sm' data-toggle="modal" data-target="#organizationModal">Update </button>
                                        <div className="modal fade" id="organizationModal" role="dialog">
                                            <div className="modal-dialog">


                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                        <h4 className="modal-title"></h4>
                                                    </div>
                                                    <form>
                                                        <div className="content-wrapper">
                                                            <div className="row">
                                                                <div className='col-lg-6 grid-margin ' style={{ margin: "25px 0px 0px 0px" }}> <h5>New Organization name</h5></div>
                                                                <div className="col-lg-6 grid-margin ">

                                                                    <input type='string' style={{ margin: "25px 0px 0px 0px" }} accept="application/image/jpeg,image/png"

                                                                        onChange={(e) => {
                                                                            setorganization(e.target.value)
                                                                        }}
                                                                        value={organization}


                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer " style={{ textAlign: "center" }} >
                                                            <button type='button' onClick={updateOrgnization} className="btn btn-danger btn-sm" style={{ margin: "25px 25px 0px 25px" }}>Update</button>
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='row ml-5'>
                                        <div className='col-md-4'>
                                            <h6 className='mt-3 mr-3'>Mobile no. : {profilestate.mobile} </h6>
                                        </div>
                                        <button className='btn btn-danger mb-3 btn-sm' data-toggle="modal" data-target="#mobileModal">Update </button>
                                        <div className="modal fade" id="mobileModal" role="dialog">
                                            <div className="modal-dialog">


                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                        <h4 className="modal-title"></h4>
                                                    </div>
                                                    <form>
                                                        <div className="content-wrapper">
                                                            <div className="row">
                                                                <div className='col-lg-4 grid-margin ' style={{ margin: "25px 0px 0px 0px" }}> <h5>New Mobie no.</h5></div>
                                                                <div className="col-lg-8 grid-margin ">

                                                                    <input type='string' style={{ margin: "25px 0px 0px 0px" }} accept="application/image/jpeg,image/png"

                                                                        onChange={(e) => {
                                                                            setmobile(e.target.value)
                                                                        }}
                                                                        value={mobile}


                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer " style={{ textAlign: "center" }} >
                                                            <button type='button' onClick={updateMobile} className="btn btn-danger btn-sm" style={{ margin: "25px 25px 0px 25px" }}>Update</button>
                                                        </div>
                                                    </form>
                                                    {/* <div className="modal-footer " style={{ textAlign: "center" }} >
                                                        <button type='submit' className="btn btn-danger btn-sm" style={{ margin: "25px 25px 0px 25px" }}>Update</button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row ml-5'>
                                        <div className='col-md-4'>
                                            <h6 className='mt-3 mr-3'>Password : ***********  </h6>
                                        </div>
                                        <button className='btn btn-danger  mb-3 btn-sm' data-toggle="modal" data-target="#passwordModal">Update </button>
                                        <div className="modal fade" id="passwordModal" role="dialog">
                                            <div className="modal-dialog">


                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                        <h4 className="modal-title"></h4>
                                                    </div>
                                                    <form>
                                                        <div className="content-wrapper">
                                                            <div className="row">
                                                                <div className='col-lg-4 grid-margin ' style={{ margin: "25px 0px 0px 0px" }}> <h5>New password</h5></div>
                                                                <div className="col-lg-8 grid-margin ">

                                                                    <input type='string' style={{ margin: "25px 0px 0px 0px" }} accept="application/image/jpeg,image/png"

                                                                        onChange={(e) => {
                                                                            setPassword(e.target.value)
                                                                        }}
                                                                        value={password}


                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer " style={{ textAlign: "center" }} >
                                                            <button type='button' onClick={updatePassword} className="btn btn-danger btn-sm" style={{ margin: "25px 25px 0px 25px" }}>Update</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <Footer />


                        </div>
                    </div>
                </div >

            </main >
        </>
    )
}