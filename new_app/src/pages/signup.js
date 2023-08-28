import Header1 from "@/copmonent/website/header1";
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { register } from '../features/user/userSlice'
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import Link from "next/link";

export default function Singup() {
    const router = useRouter();
    const dispach = useDispatch();
    let schema = Yup.object().shape({

        organization: Yup.string().required("Organization name required"),

        email: Yup.string().email("Email should be valid").required("Email is required"),
        password: Yup.string().required("Password is required"),
        name: Yup.string().required(" Name is required"),
        mobile: Yup.string().required("Mobile numeber required"),
        address: Yup.string().required("Address is required"),
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            password: '',
            organization: '',
            address: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {

            dispach(register(values))
            // alert(JSON.stringify(values, null, 2));


        },
    });
    const { isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.register

    );

    useEffect(() => {
        if (isError === true) {
            toast.error(message)
        } else if (isSuccess === true) {
            toast.success("User created successfuly ");
        }
    }, [isError, isSuccess]);



    return (<>
        <ToastContainer />
        <div style={{ backgroundColor: "#210070" }}>
            <Header1 />

        </div>

        <main>

            {/* <ToastContainer /> */}
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Singup</h4>

                                <form onSubmit={formik.handleSubmit} className="forms-sample">
                                    <div className="form-group">
                                        <label for="name">Organization</label>
                                        <input type="text" className="form-control" id="organization" placeholder="Organization"
                                            onChange={formik.handleChange("organization")}
                                            value={formik.values.organization}
                                        />

                                    </div>
                                    <div className="error mt-2 mb-2" style={{ textAlign: "right" }}>
                                        {formik.touched.organization && formik.errors.organization}
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Username"
                                            onChange={formik.handleChange("name")}
                                            value={formik.values.name}
                                            pattern="[a-zA-Z ]{2,}$"
                                            title="Accept only alphabets"

                                        />

                                    </div>
                                    <div className="error mt-2 mb-2" style={{ textAlign: "right" }}>
                                        {formik.touched.name && formik.errors.name}
                                    </div>

                                    <div className="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Email"
                                            onChange={formik.handleChange("email")}
                                            value={formik.values.email}
                                            pattern="[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,50}[\.][a-z]{2,15}"
                                            title="Email should be in format abc@gmail.com "
                                        />
                                    </div>
                                    <div className="error mt-2 mb-2" style={{ textAlign: "right" }}>
                                        {formik.touched.email && formik.errors.email}
                                    </div>
                                    <div className="form-group">
                                        <label for="mobile">Mobile</label>
                                        <input type="number" className="form-control" id="mobile" placeholder="Mobile"
                                            onChange={formik.handleChange("mobile")}
                                            value={formik.values.mobile}


                                        />
                                    </div>
                                    <div className="error mt-2 mb-2" style={{ textAlign: "right" }}>
                                        {formik.touched.mobile && formik.errors.mobile}
                                    </div>
                                    <div className="form-group">
                                        <label for="address">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="Address"
                                            onChange={formik.handleChange("address")}
                                            value={formik.values.address}
                                        />
                                    </div>
                                    <div className="error mt-2 mb-2" style={{ textAlign: "right" }}>
                                        {formik.touched.address && formik.errors.address}
                                    </div>

                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Password"
                                            onChange={formik.handleChange("password")}
                                            value={formik.values.password}
                                        />
                                    </div>
                                    <div className="error mt-2 mb-2" style={{ textAlign: "right" }}>
                                        {formik.touched.password && formik.errors.password}
                                    </div>


                                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                    <Link style={{ textDecoration: "none" }} href="/login">  <button className="btn btn-light" >Cancel</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </>
    )
}