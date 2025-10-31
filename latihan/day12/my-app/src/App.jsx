import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/welcome'

function App() {


  let people=[
    {name:"john", job:"Fishing", color:"blue"},
    {name:"bahlil", job:"mentir", color:"blue"},
    {name:"gibran", job:"plonga"},
    {name:"Owi", job:"plongo"}
  ]


    
  return (
    <>
    {people.map((item, index) => (
        <Welcome key={index} name={item.name} color={item.color} />
      ))}
    </>
  )
  
}

export default App
