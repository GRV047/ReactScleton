import { createContext, useState } from 'react';

const LoginContex = createContext({
    data:{},
    isLogin:false,
    logIn:(status,dataObject)=>{}
});

const MainState=( {children} ) => {
    const [user, setUserData] = useState({
        isLogin: false,
        data: {}
    })

    const logIn = (status,dataObject)  => {
        setUserData({
            isLogin: status,
            data: dataObject
        })
    }

    return (
        <>
            <LoginContex.Provider value={{ user, logIn }}>
                {children}
            </LoginContex.Provider>
        </>
    )
}

export {MainState,LoginContex};