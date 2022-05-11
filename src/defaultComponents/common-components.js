import './common-components.css';

function Header() {
    return (
        <div>
            <ul className='menu'>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer">
            <small>This is my footer Section</small>
        </div>
    )
}

export { Header, Footer }
