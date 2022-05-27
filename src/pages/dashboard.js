import './dashboard.css';
import UserAuth from '../context/main__state';

const Dashboard = () => {

    const {user} = UserAuth();
    return (
        <>
            <div className="main__body">
                <div className="tableContainer">
                    <h3>{user ? user.user.firstName:'NONE'}</h3>
                </div>
            </div>
        </>
    )
}

export { Dashboard }