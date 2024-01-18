import { useState } from "react"

function Input() {
    const [text,setText]=useState('');
  return (
    <>
    
    <input onChange={
        (e)=>{setText(e.target.value)}
    } placeholder="ingresa tu texto"></input>
    <h1>{text}</h1>
    </>
  )
}

export default Input