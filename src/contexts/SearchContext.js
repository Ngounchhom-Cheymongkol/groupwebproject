import React, { useState, createContext } from 'react';

export const SearchContext = createContext({
    SearchVar: '',
    setSearchVar: lang => {}
})

export const SearchProvider = ({children}) => {
    const [SearchVar, setSearchVar] = useState('');

    return(
        <SearchContext.Provider value={ {SearchVar, setSearchVar} }>
            {children}
        </SearchContext.Provider>
    )
}