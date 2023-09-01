import { getProfile } from '@/features/profile/profileSlice';
import { base_url } from '@/utils/base_url';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import html2canvas from 'html2canvas'

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

  const date1 = moment(profiles.createdAt).format('DD/MM/YY');



  const [backgrounded1, setBackgrounded1] = useState(false);
  const [backgrounded2, setBackgrounded2] = useState(false);
  const [backgrounded3, setBackgrounded3] = useState(false);
  const [backgrounded4, setBackgrounded4] = useState(false);


  const handleBg1Click = () => {
    setBackgrounded1(!backgrounded1);
  };


  const handleBg2Click = () => {
    setBackgrounded2(true);
  };

  const handleRemoveBg2Click = () => {
    setBackgrounded2(false);
  };


  const handleBg3Click = () => {
    setBackgrounded3(true);
  };

  const handleRemoveBg3Click = () => {
    setBackgrounded3(false);
  };



  const handleBg4Click = () => {
    setBackgrounded4(true);
  };


  const handleRemoveBg4Click = () => {
    setBackgrounded4(false);
  };



  return (
    <>





      <div>

        <div className="row" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          <div className="col-lg-3 col-sm-12 text-center">
            <button className="btn btn-secondary" type="button" onClick={() => { handleBg1Click(); handleRemoveBg2Click(); handleRemoveBg3Click(); handleRemoveBg4Click(); }} data-html2canvas-ignore="true">
              Default
            </button>
          </div>
          <div className="col-lg-3 col-sm-12 text-center">
            <button className="btn btn-success" type="button" onClick={() => { handleBg2Click(); handleRemoveBg3Click(); handleRemoveBg4Click(); }} data-html2canvas-ignore="true">
              Ganesh Chaturthi
            </button>
          </div>
          <div className="col-lg-3 col-sm-12 text-center">
            <button className="btn btn-warning" type="button" onClick={() => { handleBg3Click(); handleRemoveBg4Click(); }} data-html2canvas-ignore="true">
              Durga Puja
            </button>
          </div>
          <div className="col-lg-3 col-sm-12 text-center">
            <button className="btn btn-info" type="button" onClick={() => { handleBg4Click(); }} data-html2canvas-ignore="true">
              Deepavali
            </button>
          </div>
        </div>
      </div>


      <div id="content" className={`${backgrounded1 ? 'background1 ' : ''
        }${backgrounded2 ? 'background2 ' : ''
        } ${backgrounded3 ? 'background3 ' : ''
        }${backgrounded4 ? 'background4 ' : ''
        }container custom-container img-fluid background `} >
        <div >
          <div class="container">
            <div class="row">

              <div class="col-lg-12 col-sm-12">
                <h1 className="org-name" style={{ textTransform: "capitalize" }}>{profilestate.organization}</h1>
              </div>
            </div>



            <div class="row">
              <div class="col col-lg-3">
              </div>
              <div class="col col-lg-6"></div>
              <div class="col col-lg-3">
                <h5 className="org-date" >
                  {/* {moment(profiles.createdAt).format('DD/MM/YY')} */} {date1}
                </h5>
              </div>
            </div>
          </div>
          <h4 className="member-name" style={{ textTransform: "capitalize" }}>
            {profiles.name}

          </h4>
          <h5 className="donation-amt">Rs.
            {profiles.amount}
          </h5>
          <div class="row">
            <div class="col-lg-2 ">
            </div>
            <div class="col-lg-4 col-sm-12"><h5 className="event-type" style={{ textTransform: "uppercase" }}>
              {profiles.event_type}
            </h5></div>
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
      </div>

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