import { useState } from 'react';
import './test.css';
import { signUp } from '../environment/models/admin.url';

import { Header, Footer } from '../defaultComponents/common-components';
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SimpleTextBox, SimpleEmailFirld, PasswordField } from '../util/FormFirlds/FormFirld';


toast.configure();

const SignUp = () => {
    const [formValues, setFormValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
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
    const signUpUser = async(event) => {
        event.preventDefault();
        let object = formValues
        object['fullAddress'] = `${formValues.address}, ${formValues.address2}`
        const response = await signUp(object);

        console.log('this',response)
        if (response.status === 200) {
            toast.success('Successfuly created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "success"
            })
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
            navigate("/")
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
                                    <SimpleEmailFirld labelname={"inputEmail4"}
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
                                    <PasswordField
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
                                <div className="col-12 form___element">

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
                                        inputType={"text"}
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
    return (
        <>
            <Header />
            <div className="main___containers">

            </div>
            <Footer />
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
