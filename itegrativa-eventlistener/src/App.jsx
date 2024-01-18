import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Click from './components/Click'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Input></Input>
      <Click></Click>
    </>
  )
}

export default App
