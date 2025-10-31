import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './components/todo/ToDo.jsx'
import count from './components/count/countdown.jsx'


function App() {

  let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", 
    "Belajar Javascript", "Belajar ReactJS Dasar", 
    "Belajar ReactJS Advance"]
  
  return (
    <>
    <count />
    <div className="container">
        <div className="logo">
            <img src="sambercode.png" alt="" />
        </div>
        <div className="title">
            <h1>THINGS TO DO</h1>
            <p>During bootcamp in sanbercode</p>
        </div>

        <div className="formulir">
            <form action="post">
    {thingsToDo.map((item, index) =>(
      <ToDo key={index} name={item} />
    ))}
                
                <button type="submit" className='buttons'>SEND</button>
            </form>
        </div>
    </div>
      </>

  )
}


export default App
