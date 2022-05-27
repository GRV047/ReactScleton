import { useState } from 'react';
import './test.css';
import { signUp } from '../environment/models/admin.url';

import { Header, Footer } from '../defaultComponents/common-components';
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SimpleTextBox } from '../util/FormFirlds/FormFirld';
import SignUpWith from '../util/OAuth2_Components/signUpComponent';
import UserAuth from '../context/main__state'



toast.configure();

const SignUp = () => {
    const [formValues, setFormValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        userName: "",
        address: "",
        address2: "",
        city: "",
        //state: "",
        pin: "",
    })

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormValue({ ...formValues, [name]: value })
    }
    const navigate = useNavigate()
    const signUpUser = async (event) => {
        event.preventDefault();
        let object = formValues
        object['fullAddress'] = `${formValues.address}, ${formValues.address2}`
        object['status'] = true;
        const response = await signUp(object);

        if (response.status === 200) {
            // toast.success('Successfuly created', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     type: "success"
            // })
            navigate("/")
        } else {
            toast("Oops! Somthing went wrong", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "error"
            })
            //navigate("/")
        }

    }
    return (
        <>
            <Header />
            <div className="viewPort">
                <div className="main___containers mt-3 mb-3">
                    <div className="heading___text">
                        <h3>Sign Up</h3>
                    </div>
                    <form className="form___section" onSubmit={signUpUser}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 form___element">
                                    <SimpleTextBox labelname={"firstName"}
                                        labelText={"First Name"}
                                        labelClassName={"form-label"}
                                        inputType={"text"}
                                        textClassName={"form-control"}
                                        formId={"fName"}
                                        textautoComplete={"off"}
                                        name={"firstName"}
                                        textValue={formValues.firstName}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="col-md-6 form___element">
                                    <SimpleTextBox labelname={"lastName"}
                                        labelText={"Last Name"}
                                        labelClassName={"form-label"}
                                        inputType={"text"}
                                        textClassName={"form-control"}
                                        formId={"lastName"}
                                        textautoComplete={"off"}
                                        name={"lastName"}
                                        textValue={formValues.lastName}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="col-md-6 form___element">
                                    <SimpleTextBox labelname={"inputEmail4"}
                                        labelText={"Email"}
                                        labelClassName={"form-label"}
                                        inputType={"email"}
                                        textClassName={"form-control"}
                                        formId={"inputEmail4"}
                                        textautoComplete={"off"}
                                        name={"email"}
                                        textValue={formValues.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="col-md-6 form___element">
                                    <SimpleTextBox
                                        labelname={"inputPassword4"}
                                        labelText={"Password"}
                                        labelClassName={"form-label"}
                                        inputType={"password"}
                                        textClassName={"form-control"}
                                        formId={"inputPassword4"}
                                        textautoComplete={"off"}
                                        name={"password"}
                                        textValue={formValues.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="col-md-6 form___element">
                                    <SimpleTextBox
                                        labelname={"userName"}
                                        labelText={"User Name"}
                                        labelClassName={"form-label"}
                                        inputType={"text"}
                                        textClassName={"form-control"}
                                        formId={"userName"}
                                        textautoComplete={"off"}
                                        name={"userName"}
                                        textValue={formValues.userName}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="col-6 form___element">

                                    <SimpleTextBox labelname={"inputAddress"}
                                        labelText={"Address"}
                                        labelClassName={"form-label"}
                                        inputType={"text"}
                                        textClassName={"form-control"}
                                        formId={"inputAddress"}
                                        textautoComplete={"off"}
                                        name={"address"}
                                        textValue={formValues.address}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="col-12 form___element">

                                    <SimpleTextBox labelname={"inputAddress2"}
                                        labelText={"Address 2"}
                                        labelClassName={"form-label"}
                                        inputType={"text"}
                                        textClassName={"form-control"}
                                        formId={"inputAddress2"}
                                        textautoComplete={"off"}
                                        name={"address2"}
                                        textValue={formValues.address2}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="col-md-6 form___element">

                                    <SimpleTextBox
                                        labelname={"inputCity"}
                                        labelText={"City"}
                                        labelClassName={"form-label"}
                                        inputType={"text"}
                                        textClassName={"form-control"}
                                        formId={"inputCity"}
                                        textautoComplete={"off"}
                                        name={"city"}
                                        textValue={formValues.city}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div className="col-md-2 form___element">

                                    <SimpleTextBox
                                        labelname={"inputZip"}
                                        labelText={"PIN Code"}
                                        labelClassName={"form-label"}
                                        inputType={"number"}
                                        textClassName={"form-control"}
                                        formId={"inputZip"}
                                        textautoComplete={"off"}
                                        name={"pin"}
                                        textValue={formValues.pin}
                                        onChange={handleInput}
                                    />

                                </div>
                                <div className="col-12 form___element">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" for="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 form___button___element">
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Footer />
        </>
    )
}

const Login = () => {
    let navigate = useNavigate();
    const { logIn, user } = UserAuth();
    const [formValues, setFormValue] = useState({
        userName: "",
        password: ""
    })

    const handleInput = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        setFormValue({ ...formValues, [key]: value })
    }

    const loginUser = async (event) => {
        event.preventDefault();
        let object = formValues;
        
        const res = await logIn(object.userName, object.password);
        navigate('/dashboard')
    }
    return (
        <>
            <Header />
            <div className="viewPort">
                <div className="main___containers">
                    <div className="box__container mt-3 mb-3">
                        <form className="form___section" onSubmit={loginUser}>
                            <div className="login__pannel">
                                <div className="logo__container">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                        <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                                </div>
                                <SimpleTextBox labelname={"userName"}
                                    labelText={"User Name"}
                                    labelClassName={"form-label"}
                                    inputType={"text"}
                                    textClassName={"form-control"}
                                    formId={"userName"}
                                    textautoComplete={"off"}
                                    name={"userName"}
                                    textValue={formValues.userName}
                                    onChange={handleInput}
                                />

                                <SimpleTextBox labelname={"password"}
                                    labelText={"Password"}
                                    labelClassName={"form-label"}
                                    inputType={"password"}
                                    textClassName={"form-control"}
                                    formId={"password"}
                                    textautoComplete={"off"}
                                    name={"password"}
                                    textValue={formValues.password}
                                    onChange={handleInput}
                                />
                                <br />
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="container SignUp__Property">
                            <div className="row">
                                <h3>Sign Up With</h3>
                            </div>
                            <div className="row">
                                <div className="col-sm-2 block__holder">
                                    <SignUpWith mediaProfile={"facebook"} />
                                </div>
                                <div className="col-sm-2 block__holder">
                                    <SignUpWith mediaProfile={"google"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const Home = () => {
    return (
        <>
            <div className="container-fluid Background__home">
                <div className="midBox">
                    <div className="buttonHolder">
                        <div className="row">
                            <div className="col-md-6">
                                <NavLink to='signup'>Sign Up</NavLink>
                            </div>
                            <div className="col-md-6">
                                <NavLink to='login'>Login</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export { Home, Login, SignUp }
