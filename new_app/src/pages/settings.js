import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/copmonent/user/header'
import Sidebar from '@/copmonent/user/sidebar'
import Footer from '@/copmonent/user/footer'
import Rightsidbar from '@/copmonent/user/right-sidebar'
import Skin from '@/copmonent/user/skin'


// const inter = Inter({ subsets: ['latin'] })

export default function Settings() {
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
                                    <div className="col-md-4 grid-margin "> </div>
                                    <div className="col-md-4 grid-margin ">
                                        <div className=" mt-auto" >
                                            <img src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg" alt="people"
                                                style={{ borderRadius: "50%", height: "200px", width: "200px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}
                                            />
                                        </div>
                                        {/* photo update model start */}
                                        <div className='mt-4 ml-4'>
                                            <button type="button" class="btn btn-danger btn-lg" data-toggle="modal" data-target="#myModal">Update</button>
                                            <div class="modal fade" id="myModal" role="dialog">
                                                <div class="modal-dialog">


                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                            <h4 class="modal-title"></h4>
                                                        </div>
                                                        <div class="modal-body">
                                                            <p>Some text in the modal.</p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* photo update model end */}
                                    </div>
                                </div>
                                <div className='container mt-5'>
                                    <div className='row ml-5'>
                                        <div className='col-md-4'>
                                            <h6 className='mt-3 mr-3'>Mobile no. : 827349827343 </h6>
                                        </div>
                                        <button className='btn btn-danger mb-3 '>Update </button>
                                    </div>
                                    <div className='row ml-5'>
                                        <div className='col-md-4'>
                                            <h6 className='mt-3 mr-3'>Password  </h6>
                                        </div>
                                        <button className='btn btn-danger  mb-3'>Update </button>
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