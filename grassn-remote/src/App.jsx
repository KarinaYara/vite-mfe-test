import { useState } from 'react'
import './App.css'
import './index.css'

function App({language = 'en'}) {
  const [value, setValue] = useState('This is maintained in React state');
  const WELCOME_TEXT = {
    de: 'Willkommen bei GrassN',
    en: 'Welcome to GrassN'
  }

  return (
    <main className="grow">
       <div className="fles flex-col gap-2">
      <h1 className="text-2xl">
        {WELCOME_TEXT[language]}
      </h1>
      <input value={value} onChange={event => setValue(event.target.value)} className="w-1/2 border-2 rounded-md p-2"/>
   </div>
    </main>
  
  )
}

export default App
