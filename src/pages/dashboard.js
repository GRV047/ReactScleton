import './dashboard.css';
import { useContext } from 'react';
import {LoginContex} from '../context/main__state';


const Dashboard = () => {

    const { data } = useContext(LoginContex)
    console.log(data);

    return (
        <>
            <div className="main__body">
                <div className="tableContainer">
                    <h3>{data? data:'NONE'}</h3>
                </div>
            </div>
        </>
    )
}

export { Dashboard }