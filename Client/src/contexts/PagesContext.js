import React, { createContext, useState } from 'react';
import {USER} from "../utils/Roles"

export const PagesContext = createContext();

const PagesContextProvider = ({ children }) => {
    // eslint-disable-next-line
    const [pages, setPages] = useState([
        {label: 'Strona główna', url: '/', role: false},
        {label: 'Produkty', url: '/products', role: USER},
    ]);

    return (
        <PagesContext.Provider value={{pages}}>
            {children}
        </PagesContext.Provider>
    )
}

export default PagesContextProvider;