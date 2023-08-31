'use client'


import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Logout from '@/copmonent/logout'
import { config } from '@/utils/axiosconfig'
import Footer from '@/copmonent/user/footer'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/features/auth/authSlice'
import { getProfile } from '@/features/profile/profileSlice'
import Link from 'next/link'
// import Logout from '@/copmonent/logout'




export default function Home() {
  const router = useRouter();
  const dispach = useDispatch()
  useEffect(() => {
    dispach(getProfile());


  }, [])


  const authstate = useSelector((state) => state.auth);
  const profile1 = useSelector((state) => state.profile.profile)


  // const [selectedImage, setSelectedImage] = useState(null);

  // const handleImageChange = (event) => {
  //   const selectedValue = event.target.value;
  //   setSelectedImage(selectedValue);
  // };

  return (

    <>

      <main >



        <div style={{ paddingTop: " 100px " }}>
          <div className="row" >
            <div className='container' >
              <center >

                <img src="../../images/logo_main.png" alt="logo" height="250px" />
                <h2>Welcome </h2>
                {profile1.name}
              </center>

              <div className="row ">


                <div className='col-4'></div>
                <div className='col-4'>
                  {authstate.user ?
                    <div className='mx-auto'>
                      <a href="/profile" className="btn  btn-block btn-primary btn-lg font-weight-medium auth-form-btn" > Profile </a>
                    </div> :
                    <div className="row ">
                      <div className='mx-auto'>
                        <a href='/login' className="btn btn-primary btn-lg font-weight-medium auth-form-btn " style={{ margin: " 5px" }}>Login</a>
                        <a href='/signup' className="btn btn-primary btn-lg font-weight-medium auth-form-btn" style={{ margin: " 5px" }}>Signup</a>
                      </div>
                    </div>
                  }



                </div>
                <div className='col-4'></div>
              </div>



            </div>
          </div>
        </div>


        {/* <div style={{ position: " fixed", bottom: "0", width: "100%" }}>
          <Footer />
        </div> */}


      </main >

    </>
  )
}
