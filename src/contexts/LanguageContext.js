import React, { useState, createContext } from 'react';

export const LanguageContext = createContext({
    curLang: 'en',
    setLang: lang => {}
})

export const LanguageProvider = ({children}) => {
    const [curLang, setLang] = useState('en');

    return(
        <LanguageContext.Provider value={ {curLang, setLang} }>
            {children}
        </LanguageContext.Provider>
    )
}