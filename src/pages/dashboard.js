import './dashboard.css';
import {UserDataContext} from '../context/main__state'
import { useContext } from 'react';


const Dashboard = () => {

    const user = useContext(UserDataContext)
    console.log(user)
    return (
        <>
            <div className="main__body">
                <div className="tableContainer">
                    <h3>{user? user:'NONE'}</h3>
                </div>
            </div>
        </>
    )
}

export { Dashboard }