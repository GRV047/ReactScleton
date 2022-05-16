import './common-components.css';
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div className="body">
            <div className="navMenu">
                <NavLink className="menu" to='/signup'>SignUp</NavLink>
                <NavLink className="menu" to='/login'>Login</NavLink>
                <NavLink className="menu" to='#'>About</NavLink>
                <div className="dot"></div>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">area1</div>
                    <div className="col-lg-4">area2</div>
                    <div className="col-lg-4">area3</div>
                </div>
            </div>
        </div>
    )
}

export { Header, Footer }
