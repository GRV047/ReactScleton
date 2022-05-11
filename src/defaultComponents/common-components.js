import './common-components.css';

function Header() {
    return (
        <div className="body">
            <div className="navMenu">
                <a href='#'>SignUp</a>
                <a href='#'>Login</a>
                <a href='#'>About</a>
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
