import './test.css'

function SignUp() {
    return (
        <div className="main___containers">
            <div className="heading___text">
                <h3>Sign Up</h3>
            </div>
            <form className="form___section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 form___element">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="fName" />
                        </div>
                        <div className="col-md-6 form___element">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" />
                        </div>
                        <div className="col-md-6 form___element">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6 form___element">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12 form___element">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-12 form___element">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Road, Area" />
                        </div>
                        <div className="col-md-6 form___element">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4 form___element">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2 form___element">
                            <label htmlFor="inputZip" className="form-label">Pin</label>
                            <input type="text" className="form-control" id="inputZip" />
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
    )
}

function Login(){
    return(
        <div className="main___containers">

        </div>
    )
}

export { SignUp , Login }
