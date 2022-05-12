import { useState } from 'react';
import './test.css';
import { signUp } from '../environment/models/admin.url';


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

    const signUpUser = (event) => {
        event.preventDefault();
        let object = formValues
        object['fullAddress'] = `${formValues.address}, ${formValues.address2}`
        console.log(object)
        const response = signUp(object);

    }
    return (
        <div className="viewPort">

            <div className="main___containers mt-3 mb-3">
                <div className="heading___text">
                    <h3>Sign Up</h3>
                </div>
                <form className="form___section" onSubmit={signUpUser}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 form___element">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="fName" autoComplete='off' name="firstName" value={formValues.firstName} onChange={handleInput} />
                            </div>
                            <div className="col-md-6 form___element">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" autoComplete='off' name="lastName" value={formValues.lastName} onChange={handleInput} />
                            </div>
                            <div className="col-md-6 form___element">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" autoComplete='off' name="email" value={formValues.email} onChange={handleInput} />
                            </div>
                            <div className="col-md-6 form___element">
                                <label htmlFor="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" autoComplete='off' name="password" value={formValues.password} onChange={handleInput} />
                            </div>
                            <div className="col-12 form___element">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" autoComplete='off' name="address" value={formValues.address} onChange={handleInput} />
                            </div>
                            <div className="col-12 form___element">
                                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Road, Area" autoComplete='off' name="address2" value={formValues.address2} onChange={handleInput} />
                            </div>
                            <div className="col-md-6 form___element">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" autoComplete='off' name='city' value={formValues.city} onChange={handleInput} />
                            </div>
                            {/* <div className="col-md-4 form___element">
                                <label htmlFor="inputState" className="form-label">State</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div> */}
                            <div className="col-md-2 form___element">
                                <label htmlFor="inputZip" className="form-label">Pin</label>
                                <input type="text" className="form-control" id="inputZip" autoComplete='off' name='pin' value={formValues.pin} onChange={handleInput} />
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
    )
}

const Login = () => {
    return (
        <div className="main___containers">

        </div>
    )
}

const Home = () => {
    return (
        <>
        
        </>
    )
}





export { SignUp, Login }
