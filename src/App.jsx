import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Play from './components/Play'

function App() {

const [isgamestarted,Setisgamestarted]=useState(false);
function togglegame()
{
  Setisgamestarted((prev)=>!prev);
}
  return (
    <>
    {
   isgamestarted ?<Play tog={togglegame}/>:<Hero tog={togglegame}/>
    }


    </>
  )
}

export default App
