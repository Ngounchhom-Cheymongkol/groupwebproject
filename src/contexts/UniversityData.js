import React, { useState, createContext } from 'react';

export const UniversityContext = createContext({
    UniversityVar: '',
    setUniversityVar: () => {}
})

export const UniversityProvider = ({children}) => {
    const [UniversityVar, setUniversityVar] = useState('');

    return(
        <UniversityContext.Provider value={ {UniversityVar, setUniversityVar} }>
            {children}
        </UniversityContext.Provider>
    )
}