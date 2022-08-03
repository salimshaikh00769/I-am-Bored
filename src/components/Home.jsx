import React from 'react'
import { useState } from 'react'
import Bored from './Bored.jpg'
import happy from './happy.jpg'
import "../index.css"


function Home() {
  let box;
    const [acti, setActivity] = useState('');
      fetch("https://www.boredapi.com/api/activity")
    .then(res => res.json())
    .then(act => box = act);

   const [mood, setMood] = useState('../component/Bored.jpg')


    const counter = () => {
      setActivity(box.activity)
      console.log(box.activity)
      setMood("http://clipart-library.com/images/ziX5raEXT.jpg")
      console.log(mood)
    }

    let path = acti==='' ? Bored : happy ;
    let heading = acti==='' ? "Are you Bored ?" : "Do this"
    let button = acti==='' ? "Click me for fun" : "Still Bored- Click again"
   
  return (
    <div className='container'>
        <h1>{heading} {acti}</h1>
        <img src={path} alt="bored" height={'200px'} />
        <br />
        <button onClick={counter}>{button}</button>
        <h1></h1>
    </div>
  )
}

export default Home