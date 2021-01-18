import React, { createContext, useState} from 'react';
import AuthApi from '../api/AuthApi'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    // eslint-disable-next-line
    const [user, setUser] = useState(null);

    const saveUser = newUser => setUser(newUser)
        
    const logout = () => {
        setUser(null)
        AuthApi.logout()
    }

    const whoAmI = () => AuthApi.whoAmI()
    
    
    // useEffect(()=>{
    //     console.log("New user:",user)
    // },[user])

    return (
        <UserContext.Provider value={{user, saveUser, logout, whoAmI}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;