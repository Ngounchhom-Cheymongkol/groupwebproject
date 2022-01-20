import React, { useState, createContext } from 'react';

export const LanguageContext = createContext({
    curLang: 'kh',
    setLang: lang => {}
})

export const LanguageProvider = ({children}) => {
    const [curLang, setLang] = useState('kh');

    return(
        <LanguageContext.Provider value={ {curLang, setLang} }>
            {children}
        </LanguageContext.Provider>
    )
}