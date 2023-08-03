"use client"

import { useSelector } from "react-redux";

export default function Header1() {



    // useEffect(() => {
    //     dispatch(login());

    // }, []);


    const authstate = useSelector((state) => state.auth);
    // console.log(authstate.user.mobile);
    return (
        <>


            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div className="container"><a className="navbar-brand" href="#">Donation app</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">About us</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Who are We </a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Contact</a></li>

                        </ul>
                        <form className="form-inline mr-auto" target="_self">

                        </form>
                        {
                            authstate.user ?

                                <div>
                                    <p>
                                        Welcome {authstate.user.name} <a href="/profile" style={{ marginLeft: "20px", textDecoration: "none", color: "white" }}>Profile</a>
                                    </p>
                                </div>
                                :
                                <div>
                                    <div className="navbar-text">
                                        <a href="login" className="login">Log In</a>
                                    </div>
                                    <a className="btn btn-light action-button" role="button" href="signup">Sign Up</a>
                                </div>
                        }

                    </div>
                </div>
            </nav >

        </>

    )

}