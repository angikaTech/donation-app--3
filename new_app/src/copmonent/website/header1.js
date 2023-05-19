"use client"
import { login } from "@/features/auth/authSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header1() {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(login());

    // }, []);


    const authstate = useSelector((state) => state.auth);
    // console.log(authstate.user.mobile);
    return (
        <>


            <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div class="container"><a class="navbar-brand" href="#">Donation app</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse"
                        id="navcol-1">
                        <ul class="nav navbar-nav">
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/">Home</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="#">About us</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="#">Who are We </a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="#">Contact</a></li>

                            {/* <li class="dropdown"><a class="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                                <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </li> */}
                        </ul>
                        <form class="form-inline mr-auto" target="_self">
                            {/* <div class="form-group">
                                <label for="search-field"><i className="fa fa-search"></i></label>

                            </div> */}
                        </form>
                        {authstate.user ? <> <div>Welcome {authstate.user.name} <a href="/profile" style={{ marginLeft: "20px", textDecoration: "none", color: "white" }}>Profile</a> </div> </> : <div><span class="navbar-text"><a href="login" class="login">Log In

                        </a></span>
                            <a class="btn btn-light action-button" role="button" href="signup">Sign Up</a> </div>}
                        {/* <span class="navbar-text"><a href="login" class="login">Log In
                           
                        </a></span>
                        <a class="btn btn-light action-button" role="button" href="signup">Sign Up</a> */}
                    </div>
                </div>
            </nav >

        </>

    )

}