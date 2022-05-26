import { createContext, useContext, useState } from 'react';
import { loginAdmin } from '../environment/models/admin.url';

const LoginContex = createContext({
    credentials: (object) => { }
});

export const UserDataContext = createContext({
});

// export function useUserDatacontext() {
//     console.log('this',UserDataContext)
//     return useContext(UserDataContext)
// }

const MainState = ({ children }) => {
    const [user, setUserData] = useState({
    })

    const [loginData, setLoginData] = useState({
        credentials: () => { }
    })

    function credentials(object) {
        setLoginData({
            ...object
        })
        logIn(object)
    }

    async function logIn(object){
        // Login Operations
        const response = await loginAdmin(object);
        if (response.data.status === 200) {
            setUserData(()=>{
                return response.data;
            })
        }
    }
    
    console.log(user)
    return (
        <>
            <LoginContex.Provider value={{ credentials }}>
                <UserDataContext.Provider value={ user}>
                    {children}
                </UserDataContext.Provider>
            </LoginContex.Provider>
        </>
    )
}

export { MainState, LoginContex };