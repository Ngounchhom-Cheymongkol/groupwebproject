import React, { useContext } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { LanguageContext } from '../contexts/LanguageContext';
const useStyle=makeStyles((theme)=>({
    Btnitem:{
        color:"white",
      },
}))
const Click=()=>{
    alert("Your are click");
}
const LanguageSwitcher = () => {
    const classes=useStyle();
    const {curLang, setLang} = useContext(LanguageContext);

    return (
        <>
                    <Button className={classes.Btnitem}
                        style={{textDecoration: curLang == 'en' ? 'underline' : 'none' }}
                        onClick={() => setLang('en')}
                    >
                        ENG
                    </Button>|
                    <Button className={classes.Btnitem}
                        style={{textDecoration: curLang == 'kh' ? 'underline' : 'none' }}
                        onClick={() => setLang('kh')}
                    >
                        ខ្មែរ
                    </Button>
            
        </>
    )
}

export default LanguageSwitcher;