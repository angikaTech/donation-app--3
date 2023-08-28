import { getProfile } from "@/features/profile/profileSlice";
import { base_url } from "@/utils/base_url";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const RecieptImage = () => {
    const router = useRouter();
    const id1 = router.query.id;





    const [profiles, setprofiles] = useState([]);

    useEffect(() => {
        const data = axios.get(`${base_url}user/payee-by-id/${id1}`).then((response) => {

            setprofiles(response.data);

        });

    }, [id1])


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfile());


    }, []);


    const profilestate = useSelector((state) => state.profile.profile);





    return (
        <>






            <div className="container custom-container id-background">
                <div>
                    <div class="container" style={{ textTransform: "capitalize" }}>
                        <div class="row">
                            {/* <div class="col-lg-3 col-sm-12">
                                <img class="org-logo" src={`../images/${image1}`} alt="" srcSet />
                            </div> */}
                            <div class="col-lg-9 col-sm-12">
                                <h1 className="org-name" >{profilestate.organization}
                                    {/* ORGANAISATION NAME PVT LTD REG */}
                                </h1>
                            </div>
                        </div>

                        {/* <div class="row">
                            <div class="col-lg-2">
                            </div>
                            <div class="col-lg-10 col-sm-12">
                                <h2 className="org-add"
                               
                                >
                                    {profilestate.address}
                                    
                                </h2>
                            </div>
                            <div class="col-lg-2">
                            </div>
                        </div> */}

                        <div class="row">
                            <div class="col col-lg-3">
                            </div>
                            <div class="col col-lg-6"></div>
                            <div class="col col-lg-3">
                                <h5 className="org-date">{moment(profiles.createdAt).format('DD / MM / YYYY')}</h5>
                            </div>
                        </div>
                    </div>
                    <h4 className="member-name" style={{ textTransform: "capitalize" }}>{profiles.name}</h4>
                    <h5 className="donation-amt">Rs. {profiles.amount}</h5>
                    <div class="row">
                        <div class="col-lg-2 ">
                        </div>
                        <div class="col-lg-4 col-sm-12"><h5 className="event-type">DURGA POOJA</h5></div>
                        <div class="col-lg-6">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-lg-1">
                        </div>
                        <div class="col-lg-3 col-sm-12"><h5 className="org-amt">{profiles.amount}</h5></div>
                        <div class="col col-lg-6">
                        </div>
                        <div class="col col-lg-2">
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
};

export default RecieptImage;




{/* <div class="container-scroller" >
<div class="container-fluid page-body-wrapper full-page-wrapper">
  <div class="content-wrapper d-flex align-items-center auth px-0">
	<div class="row w-100 mx-0">
	  <div class="col-lg-12">
		<div class="auth-form-light text-left py-5 px-4 px-sm-5" style={{backgroundImage: 'url(https://eskipaper.com/images/blue-hortensia-1.jpg)'}}>
		  <div class="brand-logo">
			<img src="../../images/logo.svg" alt="logo"/>
		  </div>
		  <h4>New here?</h4>
		  <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
		  
		</div>
	  </div>
	</div>
  </div>

</div>

</div> */}