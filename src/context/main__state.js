import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { loginAdmin } from '../environment/models/admin.url';

const LoginContex = createContext({
    isLogin: false,
    loading: false,
    error: '',
    user: {},
    logIn: (userName, password) => { }
});



export const MainState = ({ children }) => {

    const [user, setUserData] = useState({});

    const [isLogin, setIsLogin] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState();

    function logIn(userName, password) {
        return new Promise(async (resolve, reject) => {
            try {
                setLoading(true);
                const loginData = await loginAdmin({ userName, password });
                if (loginData.status === 200) {
                    setUserData(loginData.data.data);
                    setIsLogin(true);
                    resolve(loginData)
                } else {
                    console.log(loginData.errMsg)
                }
            } catch (err) {
                setError(err);
                reject(err);
            }
        })
    }

    const memoedValue = useMemo(
        () => ({
            isLogin,
            loading,
            error,
            user,
            logIn
        }),
        [user, isLogin, logIn])




    return (
        <>
            <LoginContex.Provider value={{ memoedValue, logIn, user }}>
                {children}
            </LoginContex.Provider>
        </>
    )
}

export default function UserAuth() {
    return useContext(LoginContex);
}