import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import AuthMain from './AuthMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AuthMain />
    </>
  )
}

export default App
