import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Header from '@/copmonent/user/header'
import Sidebar from '@/copmonent/user/sidebar'
import Footer from '@/copmonent/user/footer'
import axios from 'axios';
import { useState } from 'react';
import { base_url } from '@/utils/base_url';
// import Rightsidbar from '@/copmonent/user/right-sidebar'
// import Skin from '@/copmonent/user/skin'
// import { useFormik } from 'formik'

// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
// import { createPayee } from '@/features/payee/payeeSlice'
// import { useRouter } from 'next/router'


// const inter = Inter({ subsets: ['latin'] })

export default function Subscribe() {




  // const [isSubscribed, setisSubscribed] = useState(true);
  const handleClick = () => {
    // setisSubscribed(false)
    const isSubscribed = true;
    let _id;
    if (typeof window !== 'undefined') {
      _id = JSON.parse(localStorage.getItem("id"));

    }
    const data = { isSubscribed, _id }
    console.log(data)
    try {
      const res1 = axios.put(`${base_url}user/edite-user`, data).then((response) => {
        window.location.reload();


      })

    } catch (err) {
      throw new Error(err);
    }

  };


  // const handleClick = () => {
  //   alert("you are here")
  // }






  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <ToastContainer /> */}
        <div className="container-scroller">
          <Header />
          <div className="container-fluid page-body-wrapper">

            <Sidebar />
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h1 className="display-1 text-warning">You are not Subscribed ! ! ! !</h1>
                        <h4 className="card-description text-info">
                          Get Subscription for premium features
                        </h4>
                        {/* <div class="template-demo">
                    <h1>
                      h1. Heading
                      <small class="text-muted">
                        Secondary text
                      </small>
                    </h1>
                    <h2>
                      h2. Heading
                      <small class="text-muted">
                        Secondary text
                      </small>
                    </h2>
                    <h3>
                      h3. Heading
                      <small class="text-muted">
                        Secondary text
                      </small>
                    </h3>
                    <h4>
                      h4. Heading
                      <small class="text-muted">
                        Secondary text
                      </small>
                    </h4>
                    <h5>
                      h5. Heading
                      <small class="text-muted">
                        Secondary text
                      </small>
                    </h5>
                    <h6>
                      h6. Heading
                      <small class="text-muted">
                        Secondary text
                      </small>
                    </h6>
                  </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex align-items-stretch">
                    <div className="row">
                      <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">About Easy reciept </h4>
                            <p>Many customers forget where they left their copy of the receipt. To solve this problem Angika
                              Technologies, a renowned Website Design and Digital Marketing company in Bangalore,
                              introduced Easy Receipts which allows to creation of unlimited professional receipts with 3
                              simple clicks. It is a complete solution to track your data record mannerly. Our Purpose is to be
                              the best choice when you have to do it once in a while.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title text-primary">Premium Features of EASY RECIEPT</h4>
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div className="col-md-4 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">1. Just Get the Donar Name</h4>
                          <div className="media">
                            <button type="button" className="btn btn-primary btn-rounded btn-icon align-self-center mr-3">
                              <i className="ti-star" />
                            </button>
                            <div className="media-body">
                              <p className="card-text">Enter the donor's name or business name to generate the receipt.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">2. Collect the payment</h4>
                          <div className="media">
                            <button type="button" className="btn btn-primary btn-rounded btn-icon align-self-center mr-3">
                              <i className="ti-bar-chart" />
                            </button>
                            <div className="media-body">
                              <p className="card-text">Collect donation amount and add to highlight amount in receipt.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">3. Generate the Reciept</h4>
                          <div className="media">
                            <button type="button" className="btn btn-primary btn-rounded btn-icon align-self-center mr-3">
                              <i className="ti-printer" />
                            </button>
                            <div className="media-body">
                              <p className="card-text">Just cross review and proceed for final click to generate receipt.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-md-6 stretch-card grid-margin">
                      <div className="card data-icon-card-success">
                        <div className="card-body">
                          <p className="card-title text-white">Free Version</p>
                          <div className="row">
                            <div className="col-8 text-white">
                              <h3>Trail Version</h3>
                              <p className="text-white font-weight-500 mb-0">To experience the app with your faculty members, try the trial version of the app for free.</p>
                              <button type="button" className="btn btn-primary btn-rounded btn-fw" onClick={handleClick} style={{ marginTop: '10px' }}>Get Started Now</button>
                            </div>
                            <div className="col-4 background-icon">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 stretch-card grid-margin">
                      <div className="card" style={{ backgroundColor: '#c7c7c7' }}>
                        <div className="card-body">
                          <p className="card-title text-white">Pro Version</p>
                          <div className="row">
                            <div className="col-8 text-white">
                              <h3>Coming Soon</h3>
                              <p className="text-white font-weight-500 mb-0">The Premium version coming with pro features and something special looks. Stay tuned and Set to premium</p>
                              <button type="button" className="btn btn-social-icon-text btn-twitter" style={{ marginTop: '10px' }} disabled><i className="ti-user" />Subscribe Now</button>
                            </div>
                            <div className="col-4 background-icon">
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>






                  <div class="row">
                    {/* <div className="col-md-6 grid-margin grid-margin-md-0 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">List with icon</h4>
                <p className="card-description">Add class <code>.list-star</code> to <code>&lt;ul&gt;</code></p>
                <ul className="list-star">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>Nulla volutpat aliquam velit&gt;</li>
                </ul>
              </div>
            </div>
          </div> */}
                    <div className="col-md-12 grid-margin grid-margin-md-0 stretch-card">
                      <div className="template-demo mt-2">
                        <button className="btn btn-outline-dark btn-icon-text">
                          <i className="ti-apple btn-icon-prepend" />
                          <span className="d-inline-block text-left">
                            <small className="font-weight-light d-block">Available on the</small>
                            App Store
                          </span>
                        </button>
                        <button className="btn btn-outline-dark btn-icon-text">
                          <i className="ti-android btn-icon-prepend" />
                          <span className="d-inline-block text-left">
                            <small className="font-weight-light d-block">Get it on the</small>
                            Google Play
                          </span>
                        </button>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <Footer />


            </div >
          </div >
        </div >

      </main >
    </>
  )
}