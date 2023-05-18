import React from 'react';
import { useState, useContext, FC } from 'react';
import '../../index.css'


import LanguageSwitcher from '../LanguageSwitcher';
import { Language } from '../../utils/languageTypes'


const Header: FC = ({language}) => {
   
   return (
    <>
    <header className='h-20 mb-2 flex items-center gap-16'>
        <img src='http://localhost:5003/yara-logo-shield-only.svg' alt="Yara" />
        <h1 className='text-3xl'>Microfrontend Platform PoC</h1>
        <LanguageSwitcher language={language} />
    </header>
   </>
   )
}

export default Header;