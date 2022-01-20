import React, { useContext } from 'react';
import transEn from './en.json';
import transKh from './kh.json';

import { LanguageContext } from '../contexts/LanguageContext';

const locales = {
    'en': transEn,
    'kh': transKh
};
export const translate = (langKey, transKey) => {
    if (!locales[langKey]) {
        return '';
    }

    return locales[langKey][transKey];
}
const Translation = ({transKey}) => {
    const { curLang } = useContext(LanguageContext);
    return(
        <span>{translate(curLang, transKey)}</span>
    )
}
export default Translation;